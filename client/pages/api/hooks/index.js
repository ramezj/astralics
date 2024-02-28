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
    const event = body.meta.event_name;
    if(event === 'subscription_created') {
        const userId = body.meta.custom_data.user_id;
        try {
            const updateUser = await prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    premium:true,
                    customer_portal:body.data.attributes.urls.customer_portal,
                    update_payment_method:body.data.attributes.urls.update_payment_method
                }
            });
            console.log(updateUser);
            return res.status(200).json({
                ok:true,
                response: 'Subscription Created Successfully!'
            })
        } catch (error) {
            console.error(error);
            res.status(400).json({
                ok:false,
                response: error
            })
        }
    }
    if(event === 'subscription_updated') {
        const userId = body.meta.custom_data.user_id;
        try {
            
        } catch (error) {
            
        }
    }
    if(event === 'subscription_cancelled') {
        const userId = body.meta.custom_data.user_id;
        try {
            const updateUser = await prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    premium:false,
                    customer_portal:null,
                    update_payment_method:null
                }
            });
            console.log(updateUser);
            return res.status(200).json({
                ok:true,
                response: 'Subscription Created Successfully!'
            })
        } catch (error) {
            console.error(error);
            res.status(400).json({
                ok:false,
                response: error
            })
        }
    }
    console.log(body.meta.event_name);
    console.log(body);
    console.log('URLS :', body.data.attributes.urls)
    return res.status(200).json({
        ok:true,
        response:'Webhook Received Successfully!'
    })
 }