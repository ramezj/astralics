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
        const secret = "Q2HDAQ89BHDA728BDAIUBDA8727DB";
        const rawBody = (await buffer(req)).toString('utf-8')
        const hmac = crypto.createHmac('sha256', secret)
        const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8')
        const signature = Buffer.from(req.headers['x-signature'], 'utf8')
        if (!crypto.timingSafeEqual(digest, signature)) {
          return res.status(400).json({
            message: 'Invalid signature.',
          })
        }
        console.log(req);
        return res.status(200).json({
            message:'Signatures are alike :)'
        })
      } catch (err) {
        console.error(err);
        return res.status(400).json({
            ok:false,
            response: 'Something went completely wrong',
            error:err
        })
      }
 }