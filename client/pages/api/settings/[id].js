import { prisma } from "@/lib/db"
import { useSession, signIn, signOut } from "next-auth/react"
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
    const { id } = req.query;
    const board = await prisma.board.findFirst({
      where: {
        id:id
      },
      include: {
        feedbacks:true
      }
    })
    if(!board) {
      return res.status(400).json({
        ok:false,
        response:' Board Not Found '
      })
    }
    if(board.userId != session.user.id) {
        return res.status(401).json({
            ok:false,
            response: ' Unauthorized '
        })
    }
    return res.status(200).json({
        ok:true,
        response:board,
    })
  }
