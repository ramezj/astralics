// for paddle webhooks
import { prisma } from "@/lib/db"
import crypto from "crypto"
import { buffer, text } from "micro";
import { parse } from "url";
import { createReadStream } from "fs";

function verifySignature(payload, secret, signature) {
    const hmac = crypto.createHmac('sha256', secret);
    const digest = Buffer.from(payload, 'utf8');
    hmac.update(digest);
    const hash = hmac.digest('hex');
    return hash === signature;
}
  
export default async function handler(req, res) {
    if(req.method !== 'POST') {
        return res.status(400).json({
            ok:false,
            response:'Invalid Method'
        })
    }
    const { query } = parse(req.url, true);
    const secret = 'Q2HDAQ89BHDA728BDAIUBDA8727DB';
    const payload = createReadStream(req);
    const signature = req.headers['X-Signature'];
    const isValidSignature = verifySignature(payload, secret, signature);
    if(!isValidSignature) {
        res.statusCode = 401;
        res.end('Invalid signature');
        return;
    }
    try {
        console.log('Webhook payload:', req.body);
        res.statusCode = 200;
        res.end('Webhook received successfully');
      } catch (error) {
        console.error('Error processing webhook:', error.message);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
 }