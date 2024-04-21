"use server"
import prisma from "@/lib/database";
import { auth } from "@/auth";

export async function CreatePage(name: string, handle: string, website: string) {
    const session = await auth();
    if(!session) return { error: 'unauthenticated'}
    try {
        const handleExists = await prisma.page.findFirst({
            where: {
                handle: handle
            }
        })
        if(handleExists) return { error: 'handle in use'}
        const newpage = await prisma.page.create({
            data: {
                userId:session.user?.id as string,
                name:name,
                handle:handle,
                website:website
            }
        })
        return { page: newpage }
    } catch (error) {
        return { error }
    }
}