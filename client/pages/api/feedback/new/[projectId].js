import { prisma } from "@/lib/db"

export default async function handler(req, res) {
    const { body, rating, email } = req.body;
    if(!body || !rating || !email) {
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
        response:' Incorrect Project ID'
      })
    }
    const feedback = await prisma.feedback.create({
      data: {
        body: req.body.body,
        rating: req.body.rating,
        email:req.body.email,
        projectId:projectId
      }
    })
    return res.status(200).json({
      ok:true,
      response:feedback
    })
  }
