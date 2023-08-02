import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <center>
        <br />
        <Widget projectId={'clkq68fsg0001us3w0522kvfx'} />
        <e />
      </center>
    </Layout>
  )
}