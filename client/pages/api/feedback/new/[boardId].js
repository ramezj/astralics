import { prisma } from "@/lib/db"
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
    const { title, description, type } = req.body;
    if(!title || !description || !type) {
      return res.status(400).json({
        ok:false,
        response: 'Please Fill All Fields'
      })
    }
    const { boardId } = req.query;
    const board = await prisma.board.findFirst({
      where: {
        handle:boardId
      },
      include: {
        feedbacks:true
      }
    })
    console.log(board);
    if(!board) {
      return res.status(400).json({
        ok:false,
        response:'Configure Project ID'
      })
    }
    const user = await prisma.user.findFirst({
      where: {
        id:board.userId
      }
    });
    // change number to 25 in production, 5 is only in dev mode for testing
    if(board.feedbacks.length >= 20) {
      if(user.premium === false) {
        return res.status(400).json({
          ok:false,
          response:'Upgrade to Premium'
        })
      }
    }
    const feedback = await prisma.feedback.create({
      data: {
        body: req.body.body,
        title:req.body.title,
        description:req.body.description,
        type:req.body.type,
        boardId:board.id
      }
    })
    return res.status(200).json({
      ok:true,
      response:feedback
    })
  }
