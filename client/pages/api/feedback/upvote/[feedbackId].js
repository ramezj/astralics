import { prisma } from "@/lib/db"
import NextCors from 'nextjs-cors';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
    const session = await getServerSession(req, res, authOptions);
    if(!session) {
        return res.status(401).json({
            ok:true,
            response: ' Unauthorized '
        })
    }
    const { feedbackId } = req.query;
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
    const voteExists = await prisma.itemVote.findFirst({
        where: {
            feedbackId:feedback.id,
            userId:session.user.id
        }
    });
    if(voteExists) {
        try {
            const deleteVote = await prisma.itemVote.delete({
                where: {
                    id:voteExists.id
                }
            })
            return res.status(200).json({
                ok:true,
                response:"Downvoted Successfully"
            })
        } catch (error) {
            return res.status(401).json({
                ok:false,
                response: "something went completely wrong"
            })
        }
    }
    if(!voteExists) {
        try {
            const createUpvote = await prisma.itemVote.create({
                data: {
                    feedbackId:feedback.id,
                    userId:session.user.id
                }
            })
            return res.status(200).json({
                ok:true,
                response:"Upvoted!"
            })
        } catch (error) {
            return res.status(401).json({
                ok:false,
                response:"something went completely wrong"
            })
        }
    }
}
