import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <center>
        <br />
        test
        <Widget projectId={'clk3u556b0003uszw7zm3jdfu'} />
      </center>
    </Layout>
  )
}