import { prisma } from "@/lib/db"
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]";

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
      }
    })
    if(board.userId != session.user.id) {
        return res.status(401).json({
            ok:false,
            response: ' Unauthorized '
        })
    }
    const deleteFeedback = await prisma.feedback.deleteMany({
      where: {
        boardId:id
      }
    });
    const deleteBoard = await prisma.board.delete({
      where: {
        id:id
      } 
    });
    if(!deleteBoard || !deleteFeedback) {
      return res.status(400).json({
        ok:false,
        response: 'something went wrong'
      })
    }
    return res.status(200).json({
        ok:true,
        response:'Project Deleted Successfully'
    })
  }
