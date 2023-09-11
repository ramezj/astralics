import { prisma } from "@/lib/db"
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
    const { body, rating, email } = req.body;
    if(!body || !email) {
      return res.status(400).json({
        ok:false,
        response: 'Please Fill All Fields'
      })
    }
    const { projectId } = req.query;
    const project = await prisma.project.findFirst({
      where: {
        id:projectId
      },
      include: {
        feedbacks:true
      }
    })
    if(!project) {
      return res.status(400).json({
        ok:false,
        response:'Configure Project ID'
      })
    }
    const user = await prisma.user.findFirst({
      where: {
        id:project.userId
      }
    });
    // change number to 25 in production, 5 is only in dev mode for testing
    if(project.feedbacks.length >= 5) {
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
        rating:5,
        email:req.body.email,
        projectId:projectId
      }
    })
    return res.status(200).json({
      ok:true,
      response:feedback
    })
  }
