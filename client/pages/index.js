import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"
import { BlitzFeedback } from "blitzpackagev2"
import Features from "@/components/Features"
import Alert from "@/components/Alerts/Alert"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      {/* <Features /> */}
      <center>
        {/* <Alert /> */}
          <h1 className='sm:text-5xl 2xl:mt-8 text-5xl font-bold tracking-tight leading-none text-white md:text-6xl lg:text-5xl lg:w-3/6'>Feedback is power, collect it with our platform ✨</h1>
          <br />
          <br />
            <Widget projectId={'cll5z60fq0001usysevupa81n'} />
            </center>
    </Layout>
  )
}