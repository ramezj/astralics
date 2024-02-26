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
	const digest = Buffer.from(hmac.update(text(req.body)).digest('hex'), 'utf8');
	const signature = Buffer.from(req.headers['x-signature'] || '', 'utf8');
    if(!crypto.timingSafeEqual(digest, signature)) {
        return res.status(400).json({
            ok:false,
            response:'Invalid signature'
        })
    }
    return res.status(200).json({
        ok:true,
        response:'Webhook received successfully!'
    })
 }