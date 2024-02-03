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
 }