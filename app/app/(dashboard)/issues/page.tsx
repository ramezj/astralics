import { Metadata } from "next"
import { TableComponent } from "@/components/TableComponent";

export const metadata: Metadata = {
    title: "Astralics | Issues",
    description: "Generated by create next app",
};
  
export default async function Page() {
    return (
        <>
        <h1 className="font-bold text-2xl">Issues</h1>
        <TableComponent />
        </>
    )
}