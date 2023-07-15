import { prisma } from "@/lib/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    if(!session) {
        return res.status(401).json({
            ok:true,
            response: ' Unauthorized '
        })
    }
    const { name } = req.body;
    try {
        const newProject = await prisma.project.create({
            data: {
                name:'test',
                userId:session.user.id
            }
        })
        if(!newProject) {
            return res.status(400).json({
                ok:false,
                response:'Something went wrong'
            })
        }
        return res.status(200).json({
            ok:true,
            response:newProject
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error
        })
    }
  }
  