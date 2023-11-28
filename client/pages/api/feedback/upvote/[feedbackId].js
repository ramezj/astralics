import { prisma } from "@/lib/db"
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
    const { feedbackId } = req.query;
    console.log(feedbackId);
    const feedback = await prisma.feedback.findFirst({
        where: {
            id: feedbackId
        }
    });
    if(!feedback) {
        return res.status(400).json({
            ok:false,
            response:"Feedback not found"
        })
    };
    const updateFeedback = await prisma.feedback.update({
        where: {
            id: feedbackId
        },
        data: { 
            upvotes: {
                increment: 1
            }
        }
    })
    if(updateFeedback) {
        return res.status(200).json({
            ok:true,
            response:"Upvoted Successfully"
        })
    } else {
        return res.status(400).json({
            ok:false,
            response:"Something went wrong"
        })
    }
}
