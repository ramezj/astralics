import { useSession } from "next-auth/react"
import AppLayout from "@/components/app/AppLayout"
import { useRouter } from "next/navigation";

export default function () {
    const router = useRouter();
    const { data: session } = useSession({
      required:true,
      onUnauthenticated() {
          router.push('/');
      }
    })
    return (
        <>
        <AppLayout>

        </AppLayout>
        </>
    )
}