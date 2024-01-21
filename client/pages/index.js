import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import BetaAlert from "@/components/other/BetaAlert"
import { motion } from 'framer-motion'
import FeedbackDemo from "@/components/layout/FeedbackDemo"
import { ArrowRight } from "lucide-react"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <title>Lunar</title>
      <center>
        <div className="lg:-mt-4 2xl:mt-0">
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
            sm:text-6xl 2xl:text-7xl 2xl:mt-14 md:text-7xl lg:text-6xl lg:mt-4 2xl:w-3/6 lg:w-4/6 sm:mt-8 text-5xl w-4/5 font-bold tracking-tight leading-none text-transparent bg-clip-text text-white mt-8 drop-shadow-sm'>
            built for developers, by developers.
            </motion.h1>
            <br />
            {/* <div className="flex flex-wrap gap-4 justify-center w-full mt-3 mb-3 lg:mb-5">
            <button className='font-bold w-[10rem] py-2 bg-white text-black hover:bg-gray-200 rounded-xl flex gap-2 content-center justify-center items-center duration-200'>
            Try now 
            </button>
            <button className='font-bold w-[10rem] py-2 bg-white text-black hover:bg-gray-200 rounded-xl flex gap-2 content-center justify-center items-center duration-200'>
            Demo
            <ArrowRight className='w-5 h-5  align-middle flex' />
            </button>
            </div>     */}
        </div>  
          <br />
          <div className="w-full content-center items-center justify-items-center">
              <div className="2xl:-mt-2 xl:-mt-4 2xl:w-2/6 xl:w-2/5 w-4/5 flex-row">
              <motion.div
                  initial={{
                    opacity: 0,
                      y:-10
                  }}
                  animate={{
                   opacity: 1,
                   y:0
                  }}
                  transition={{duration: 0.5, delay: 0.15}}
                  >
                <FeedbackDemo session={session} title="Feedback" type="📝 Feedback" description={"Love the website, keep it up!"} upvotes="1"/>
                </motion.div>
                <br />
                <motion.div
                  initial={{
                    opacity: 0,
                      y:-10
                  }}
                  animate={{
                   opacity: 1,
                   y:0
                  }}
                  transition={{duration: 0.5, delay: 0.30}}
                  >
                <FeedbackDemo session={session} title="Feature Request" type="💡 Feature Request" description={"Can you add more authentication options? thanks!"} upvotes="1"/>
                </motion.div>
              </div>
          </div>
            </center>
    </Layout>
  )
}