import prisma from "@/lib/database";

export default async function CheckIsFirstTimeUser(userId: string) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: userId
            }
        }) 
    } catch (error) {
        
    }
}