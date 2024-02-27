// for paddle webhooks
import { prisma } from "@/lib/db"
import crypto from "crypto"
import { buffer, text } from "micro";
import { createReadStream } from "fs";
import { NextRequest} from "next/server";
    export const config = {
        api: {
            bodyParser:false
        }
    }
export default async function handler(req, res) {
    if(req.method !== 'POST') {
        return res.status(400).json({
            ok:false,
            response:'Invalid Method'
        })
    }
    const rawBody = req;
    const rawText = await text(rawBody);
    const body = JSON.parse(rawText);
    const secret = 'Q2HDAQ89BHDA728BDAIUBDA8727DB';
    const hmac = crypto.createHmac('sha256',secret);
    const digest = Buffer.from(hmac.update(rawText).digest('hex'), 'utf8');
    const signature = Buffer.from(req.headers['x-signature'] || '', 'utf8');
    if(!crypto.timingSafeEqual(digest, signature)) {
        console.error('INVALID TOKEN')
        return res.status(401).json({
            ok:false,
            response:'Invalid Token'
        })
    }
    console.log('VALID TOKEN, WEBHOOK RECEIVED')
    console.log(body.meta.event_name);
    return res.status(200).json({
        ok:true,
        response:'Webhook Received Successfully!'
    })
 }