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
    const { name, url, handle} = req.body;
    if(!name || !url || !handle ) {
        return res.status(400).json({
            ok:false,
            response: 'Credentials Missing'
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
        if(user.boards.length >= 1) {
            if(user.premium === false) {
                return res.status(400).json({
                    ok:false,
                    response: 'Upgrade to Premium'
                })
            }
        }
        const boardExist = await prisma.board.findFirst({
            where: { 
                handle:handle
            }
        });
        if(boardExist) {
            return res.status(400).json({
                ok:false,
                response:' Handle unavailable '
            })
        }
        const newBoard = await prisma.board.create({
            data: {
                name:name,
                website:url,
                handle:handle,
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
  