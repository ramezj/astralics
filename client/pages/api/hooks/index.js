// for paddle webhooks
import { prisma } from "@/lib/db"
import crypto from "crypto"
import { buffer, text } from "micro";

export default async function handler(req, res) {
    if(req.method !== 'POST') {
        return res.status(400).json({
            ok:false,
            response:'Invalid Method'
        })
    }
    const secret = "Q2HDAQ89BHDA728BDAIUBDA8727DB";
    const hmac = crypto.createHmac('sha256', secret);
    const rawBody = (await buffer(req)).toString('utf-8')
	const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
	const signature = Buffer.from(req.headers['x-signature'] || '', 'utf8');
    console.log("Lemon-Squeezy Signature :", signature);
    console.log("Digest :", digest);
    if(!crypto.timingSafeEqual(digest, signature)) {
        console.log('Invalid Signature..')
        return res.status(400).json({
            ok:false,
            response:'Invalid signature'
        })
    }
    console.log("Signature verified");
    return res.status(200).json({
        ok:true,
        response:'Webhook received successfully!'
    })
 }