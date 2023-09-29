import { prisma } from "@/lib/db";

export default async function handler(req, res) {
    if(req.method === 'POST') {
        return res.status(400).json({
            ok:false,
            response: 'Wrong Request Method'
        })
    }
    const { boardHandle } = req.query;
    const board = await prisma.board.findFirst({
        where: {
            handle:boardHandle
        },
        include: {
            feedbacks: {
              orderBy: {
                createdAt: 'desc',
              },
            }
          }
    })
    if(!board) {
        return res.status(400).json({
            ok:false,
            response: ' Board Not Found '
        })
    };
    return res.status(200).json({
        ok:true,
        response:board
    })
}