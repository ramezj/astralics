import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"
import { BlitzFeedback } from "blitzpackagev2"
import Features from "@/components/Features"
import Link from "next/link"
import BetaAlert from "@/components/other/BetaAlert"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <title>Turbo</title>
      <center>
        <div className="">
          <BetaAlert />
            <h1 className='sm:text-5xl 2xl:text-7xl 2xl:mt-14 text-4xl w-4/5 font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-gray-200 via-white to-gray-200 md:text-5xl lg:text-5xl lg:mt-4 lg:w-3/6 sm:mt-8 mt-4'>
            The easiest, fastest way to collect user feedback.
            </h1>
            <br />
            <p className='text-gray-100 lg:text-xl lg:w-2/6 md:w-3/6 w-4/5'>An easily embeddable, light-weight feedback widget package that is used to collect user feedback from anywhere.</p>
        </div>  
          <br />
          <div className="w-full content-center items-center justify-items-center">
          <Widget projectId={'clmilxamo0003rt6hwvtibm1f'} />
          </div>
            </center>
    </Layout>
  )
}