import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"
import { BlitzFeedback } from "blitzpackagev2"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <center>
        <br />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">We invest in the world’s potential</h1>
        <br /><br />
        <Widget projectId={'clkt435x30003jq09tj4h214a'} />
        {/* <BlitzFeedback projectId={'clkt435x30003jq09tj4h214a'} /> */}
      </center>
    </Layout>
  )
}