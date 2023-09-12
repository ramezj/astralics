import { prisma } from "@/lib/db"
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    if(req.method === 'GET') {
        return res.status(400).json({
            ok:false,
            response: 'Wrong Request Method'
        })
    }
    const session = await getServerSession(req, res, authOptions);
    if(!session) {
        return res.status(401).json({
            ok:false,
            response: ' Unauthorized '
        })
    }
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({
            ok:false,
            response: 'data missing'
        })
    }
    const updateUser = await prisma.User.update({
        where: {
            email:session.user.email
        },
        data: {
           name: name 
        }
    });
    if(!updateUser) {
        return res.status(400).json({
            ok:false,
            response:'Failed'
        })
    };
    return res.status(200).json({
        ok:true,
        response: 'Updated Successfully'
    })
    console.log(session);
  }
