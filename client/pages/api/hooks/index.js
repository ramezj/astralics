// for paddle webhooks
import { prisma } from "@/lib/db"

export default async function handler(req, res) {
    if(req.method == 'GET') {
        return res.status(400).json({
            ok:false,
            response:'Invalid Method'
        })
    }
    console.log(req.body);
    console.log("CUSTOM DATA =====" , req.body.data.meta.custom_data);
    return res.status(200).json({
        ok:true,
        response: 'Webhook Received Successfully'
    })
 }