import prisma from "@/lib/database";
import { auth } from "@/auth";

export async function GetUser() {
    const session = await auth();
    if(!session || session === null) return { error: 'unauthenticated'}
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: session?.user?.id
            }
        })
        return { user }
    } catch (error) {
        return { error }
    }
}