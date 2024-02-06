import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import BetaAlert from "@/components/other/BetaAlert"
import { motion } from 'framer-motion'
import FeedbackDemo from "@/components/layout/FeedbackDemo"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <title>astralics</title>
      <center>
        <div className="">
          {/* <motion.div
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
          </motion.div> */}
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
            sm:text-6xl 2xl:text-7xl 2xl:mt-14 md:text-7xl lg:text-5xl lg:mt-12 2xl:w-3/6 lg:w-4/6 sm:mt-8 text-4xl w-4/5 font-bold tracking-tight leading-none text-transparent bg-clip-text text-zinc-900 dark:text-gray-100 mt-10 drop-shadow-sm'>
           Feedback at your fingertips. Get the data you need, effortlessly.
            </motion.h1>
            <div>
              <div className='2xl:w-full lg:w-full md:w-full w-3/4 mt-2 '>
            <motion.h1 
            initial={{
              opacity: 0,
              x:-20
            }}
            animate={{
              opacity: 1,
              x:0
            }}
            transition={{duration: 0.8}} className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground text-xl">
              Create stunning feedback pages, completely for free.
            </motion.h1>
            </div>
            </div>
            <br />
            {/* <div className='mt-2 mb-2'>
            <Button className="gap-1 bg-gray-200 hover:bg-gray-300 text-black dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-white px-12">
              Try for free <ArrowRightIcon className='w-4 h-4'/>
            </Button>
            </div> */}
        </div>  
          <br />
          <div className="w-full content-center items-center justify-items-center">
            {/* <img src="/Screenshot.png"
            className='h-[30rem] w-[60rem] border border-black/10 dark:border-white/10 rounded-lg'
            alt="Picture of the author"
            /> */}
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
                <FeedbackDemo session={session} title="Feedback" type="feedback" description={"Love the website, keep it up!"} upvotes="1"/>
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
                <FeedbackDemo session={session} title="Feature Request" type="feature_request" description={"Can you add more authentication options? thanks!"} upvotes="1"/>
                </motion.div>
              </div>
          </div>
            </center>
    </Layout>
  )
}