import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import Widget from "@/components/widget"
import BetaAlert from "@/components/other/BetaAlert"
import { motion } from 'framer-motion'

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <title>Lunar</title>
      <center>
        <div className="">
          <motion.div
          initial={{
            opacity: 0,
            y:-10
          }}
          animate={{
            opacity: 1,
            y:0
          }}
          transition={{duration: 0.8}}
          >
              <BetaAlert />
          </motion.div>
            <motion.h1 
            initial={{
              opacity: 0,
              x:20
            }}
            animate={{
              opacity: 1,
              x:0
            }}
            transition={{duration: 0.8}}
            className='
            sm:text-5xl 2xl:text-7xl 2xl:mt-14 text-4xl w-4/5 font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-gray-200 via-white to-gray-200 md:text-5xl lg:text-5xl lg:mt-8 lg:w-3/6 sm:mt-8 mt-8'>
            The easiest, fastest way to collect user feedback
            </motion.h1>
            <br />
            {/* <p className='text-gray-100 lg:text-xl lg:w-2/6 md:w-3/6 w-4/5'>An easily embeddable, light-weight feedback widget package that is used to collect user feedback from anywhere.</p> */}
        </div>  
          <br />
          <div className="w-full content-center items-center justify-items-center">
            <motion.div
           initial={{
            opacity: 0,
            x:-20
          }}
          animate={{
            opacity: 1,
            x:0
          }}
            transition={{duration: 0.8}}
            >
              
                <Widget projectId={'cln34hts20003la08z753re9k'} title={'Feedback 🪐'} />
            </motion.div>
          </div>
            </center>
    </Layout>
  )
}