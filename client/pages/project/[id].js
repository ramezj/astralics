import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from "@/components/layout"
import { motion } from "framer-motion"
import Feedback from "@/components/project/Feedback"

export default function Page() {
    const router = useRouter()
    const { id } = router.query;
    const { data: session } = useSession({})
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState(false); 
    const [ feedback, setFeedback ] = useState([])
    useEffect(() => {
        if(!id) {
            return;
        }
        const fetchProject = async () => {
            setLoading(true);
            const response = await fetch(`/api/project/${router.query.id}`)
            const res = await response.json();
            if(res.ok == false) {
                return router.push('/404')
            }
            setData(res.response);
            setFeedback(res.response.feedbacks)
            setLoading(false);
        }
        fetchProject();
    }, [id])
  return (
    <>
    <Layout>
     <br />
     <center>
     { 
    loading ? <>Loading..</>
    : 
    <> 
    <center>
    <h2 className="font-bold text-xl">{data.name}</h2>
    <br />
    <div className='flex flex-wrap gap-8 justify-center w-full'>
    { 
    feedback.map((feedback) => {
        return (
            <>
            <Feedback title={feedback.body} rating={feedback.rating} email={feedback.email} />
            </>
        )
    })
    }
    </div>
    </center>
    </>
    }
    <motion.div
          initial={{opacity: 0 }}
      animate={{opacity: 1 }}
      exit={{opacity: 0 }}
      transition={{
        duration:1
      }}>
        <div className="flex flex-wrap gap-8 justify-center w-full">
        </div>
        </motion.div>
    </center>
    </Layout>
    </>
  )
}