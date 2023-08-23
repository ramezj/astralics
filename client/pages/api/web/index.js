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
    if(req.body.subscription_plan_id == '63325') {
        console.log('Someone subscribed to the $3.99 plan');
    }
    if(req.body.subscription_plan_id == '63601') {
        console.log('Someone subscribed to the $75.00 plan');
    }
    if(req.body.alert_name == "subscription_created") {
        try {
            const updateUser = await prisma.user.update({
                where: {
                    id:req.body.passthrough
                },
                data: {
                    premium: true,
                    level:1
                }
            })
        } catch (error) {
            console.error(error);
        }
    }
 }