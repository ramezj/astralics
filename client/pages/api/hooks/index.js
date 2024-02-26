// for paddle webhooks
import { prisma } from "@/lib/db"
import crypto from "crypto"

export default async function handler(req, res) {
    if(req.method !== 'POST') {
        return res.status(400).json({
            ok:false,
            response:'Invalid Method'
        })
    }
    try {
        const rawBody = await req.text();
        const secret = "Q2HDAQ89BHDA728BDAIUBDA8727DB";
        const hmac = crypto.createHmac('sha256', secret);
        const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
        const signature = Buffer.from(req.headers.get('X-Signature') || '', 'utf8');
        if (!crypto.timingSafeEqual(digest, signature)) {
          throw new Error('Invalid signature.');
        }
        const data = JSON.parse(rawBody)
        const eventName = data['meta']['event_name']
        const obj = data['data']['attributes']
        const objId = data['data']['id']
        console.log(eventName)
      } catch (err) {
        console.error(err);
        return res.status(400).json({
            ok:false,
            response: 'Something went completely wrong',
            error:err
        })
      }
 }