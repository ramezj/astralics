import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"
import { BlitzFeedback } from "blitzpackagev2"
import Features from "@/components/Features"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      {/* <Features /> */}
      <center>
        <br />
          <h1 className='sm:text-6xl 2xl:mt-8 text-5xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-5xl lg:w-3/6 sm:w-full'>Feedback is power, collect it with our platform.</h1>
          <br />
          <br />
            <Widget projectId={'cll5z60fq0001usysevupa81n'} />
            </center>
    </Layout>
  )
}