import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"
import { Widget as widget } from "blitzfeedbacktest"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <center>
        <br />
        <Widget projectId={'clkn99dp8000cmc16vh30pjh0'} />
        <widget name="test"/>
      </center>
    </Layout>
  )
}