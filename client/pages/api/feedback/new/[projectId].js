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
      }
    })
    if(!project) {
      return res.status(400).json({
        ok:false,
        response:'Configure Project ID'
      })
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
