import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]";
import sortFeedback from "@/utils/sortFeedback";

export default async function handler(req, res) {
    if(req.method === 'POST') {
        return res.status(400).json({
            ok:false,
            response: 'Wrong Request Method'
        })
    }
    const { boardHandle } = req.query;
    const session = await getServerSession(req, res, authOptions);
    if(session) {
        try {
            const board = await prisma.board.findFirst({
                where: {
                    handle:boardHandle
                },
                include: {
                    feedbacks: {
                      orderBy: {
                        createdAt: 'desc',
                      },
                      include:{
                        itemVotes:true
                    }
                    },
                }
            })
            if(!board) {
                return res.status(400).json({
                    ok:false,
                    response: ' Board Not Found '
                })
            };
            const upvotes = await prisma.board.findFirst({
                where: {
                    handle:boardHandle
                },
                include: {
                    feedbacks: {
                      orderBy: {
                        createdAt: 'desc',
                      },
                      where: {
                        itemVotes: {
                            some: {
                                userId: session.user.id
                            }
                        }
                      }
                    },
                }
            })
            const test = await sortFeedback(board.feedbacks,upvotes.feedbacks);
            const sortedFeedbacks = await test.filter((x) => x.type === 'feedback');
            const sortedFeatureRequests = await test.filter((x) => x.type === 'feature_request');
            const sortedBugReport = await test.filter((x) => x.type === 'bug_report');  
            return res.status(200).json({
                ok:true,
                auth:true,
                response:board,
                merged:test,
                sortedFeedbacks: sortedFeedbacks,
                sortedFeatureRequests:sortedFeatureRequests,
                sortedBugReport:sortedBugReport
            })
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                ok:false,
                response:error
            })
        }
    } else {
        const board = await prisma.board.findFirst({
            where: {
                handle:boardHandle
            },
            include: {
                feedbacks: {
                  orderBy: {
                    createdAt: 'desc',
                  },
                  include:{
                    itemVotes:true
                }
                },
            }
        })
        const sortedFeedbacks = await board.feedbacks.filter((x) => x.type === 'feedback');
        const sortedFeatureRequests = await board.feedbacks.filter((x) => x.type === 'feature_request');
        const sortedBugReport = await board.feedbacks.filter((x) => x.type === 'bug_report');  
        if(!board) {
            return res.status(400).json({
                ok:false,
                response: ' Board Not Found '
            })
        };
        return res.status(200).json({
            ok:true,
            auth:false,
            response:board,
            sortedFeedbacks: sortedFeedbacks,
            sortedFeatureRequests:sortedFeatureRequests,
            sortedBugReport:sortedBugReport
        })
    }
}