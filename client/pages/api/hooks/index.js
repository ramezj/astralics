// for paddle webhooks
import { prisma } from "@/lib/db"
import crypto from "crypto"

export default async function handler(req, res) {
    const SECRET = process.env.LEMON_SQUEEZY_SECRET_KEY;
    if(req.method !== 'POST') {
        return res.status(400).json({
            ok:false,
            response:'Invalid Method'
        })
    }
    const signature = req.headers['x-signature'];
    if(!signature) {
        return res.status(400).json({ message: 'Missing required headers' });
    }
    const computedSignature = crypto.createHmac('sha256', SECRET_KEY).update(JSON.stringify(req.body)).digest('hex');
    if(computedSignature !== signature) {
        return res.status(401).json({ message: 'Invalid signature' });
    }
    const event = req.body.event;
    switch (event) {
        case 'subscription_created':
        console.log('Subscription created: ', req.body);
        break;
        case 'subscription_updated':
        console.log('Subscription updated: ', req.body);
        break;
        case 'subscription_cancelled':
        console.log('Subscription cancelled: ', req.body);
        break;
        default:
        console.warn('Unhandled webhook event:', event);
        break;
    }
    return res.status(200).json({ message: 'Webhook received and processed successfully' });
 }