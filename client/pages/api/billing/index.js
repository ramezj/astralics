import { prisma } from "@/lib/db"
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    if(req.method != 'GET') {
        return res.status(400).json({
            ok:false,
            response: 'Wrong Request Method'
        })
    }
    const session = await getServerSession(req, res, authOptions);
    if(!session) {
        return res.status(401).json({
            ok:false,
            response: 'Unauthorized'
        })
    }
    const user = await prisma.user.findFirst({
        where: {
            id:session.user.id
        }
    });
    if(!user) {
        return res.status(400).json({
            ok:false,
            response:'404'
        })
    }
    return res.status(200).json({
        ok:true,
        response: user
    })
  }
