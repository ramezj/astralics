import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <center>
        <br />
        <Widget projectId={'clkmss0b00001ussg4bxlvow5'} />
      </center>
    </Layout>
  )
}