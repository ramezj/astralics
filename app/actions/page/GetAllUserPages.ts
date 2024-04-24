"use server"
import prisma from "@/lib/database";
import { auth } from "@/auth";

export async function GetAllUserPages() {
    const session = await auth();
    if(!session) return { error: 'unauthenticated'}
    try {
        const pages = await prisma.user.findFirst({
            where: {
                id:session.user?.id
            },
            include: {
                pages: true
            }
        });
        return { pages: pages?.pages }
    } catch (error) {
        return { error }
    }
}