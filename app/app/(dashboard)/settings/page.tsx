import { auth } from "@/auth"
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth();
    if(!session?.user) redirect('/login');
    return (
        <>
        
        </>
    )
}