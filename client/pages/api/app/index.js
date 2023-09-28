import { prisma } from "@/lib/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    if(!session) {
        return res.status(401).json({
            ok:false,
            response: ' Unauthorized '
        })
    }
    const user = await prisma.user.findFirst({
        where: {
            id:session.user.id
        },
        include: {
            boards: {
                include: {
                    feedbacks:true
                }
            }
        }
    });
    res.status(200).json({
        ok:true,
        response:user
    })
  }
  