import prisma from "@/lib/database";

export async function GetUserById(userId: string) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })
        return { user }
    } catch (error) {
        return { error }
    }
}