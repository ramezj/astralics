import { Metadata } from "next"
import { auth } from "@/auth";
import { GetUser } from "@/actions/user/GetUser";
import { redirect } from "next/navigation";
import { CreateNewPageForm } from "@/components/CreateNewPageForm";

export const metadata: Metadata = {
    title: "Astralics | Create New Page",
    description: "Generated by create next app",
};
  
export default async function Page() {
    const session = await auth();
    if(!session) redirect('/login');
    const user = await GetUser();
    return (
        <>
        <div>
        <CreateNewPageForm />
        </div>
        </>
    )
}