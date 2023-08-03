import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <center>
        <br />
        <Widget projectId={'clkt435x30003jq09tj4h214a'} />
        <e />
      </center>
    </Layout>
  )
}