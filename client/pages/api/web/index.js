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
    // if(req.body.alert_name == "subscription_created") {
    //     if(req.body.subscription_plan_id == '63325') {
    //         try {
    //             const updateUser = await prisma.user.update({
    //                 where: {
    //                     id:req.body.passthrough
    //                 },
    //                 data: {
    //                     premium: true,
    //                     level:1
    //                 }
    //             })
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     if(req.body.subscription_plan_id == '63601') {
    //         try {
    //             const updateUser = await prisma.user.update({
    //                 where: {
    //                     id:req.body.passthrough
    //                 },
    //                 data: {
    //                     premium: true,
    //                     level:2
    //                 }
    //             })
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // }
 }