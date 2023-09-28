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
    const { name, url } = req.body;
    if(!name || !url ) {
        return res.status(400).json({
            ok:false,
            response: 'Name or Url Missing'
        })
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                id:session.user.id
            },
            include:{
                boards:true
            }
        });
        console.log(user.boards.length);
        if(user.boards.length >= 1) {
            if(user.premium === false) {
                return res.status(400).json({
                    ok:false,
                    response: 'Upgrade to Premium'
                })
            }
        }
        const newBoard = await prisma.board.create({
            data: {
                name:name,
                website:url,
                userId:session.user.id
            }
        })
        if(!newBoard) {
            return res.status(400).json({
                ok:false,
                response:'Something went wrong'
            })
        }
        return res.status(200).json({
            ok:true,
            response:newBoard
        })
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            error
        })
    }
  }
  