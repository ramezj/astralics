import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      
    </Layout>
  )
}