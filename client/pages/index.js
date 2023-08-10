import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"
import { BlitzFeedback } from "blitzpackagev2"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <center>
        <br /><br />
          <h1 className=" sm:text-6xl 2xl:mt-8 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-6xl dark:text-white">Empowering <i className="text-transparent bg-clip-text backgroundColor">User </i> Feedback Management 🚀</h1>
          <br /><br />
            <Widget projectId={'clkt435x30003jq09tj4h214a'} />
        {/* <BlitzFeedback projectId={'clkt435x30003jq09tj4h214a'} /> */}
      </center>
    </Layout>
  )
}