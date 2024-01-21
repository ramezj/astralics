import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Feedback from "@/components/board/Feedback"
import Loading from "@/components/board/Loading"
import AppLayout from "@/components/app/AppLayout"

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
            const response = await fetch(`/api/board/${router.query.id}`)
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
    console.log(feedback);
  return (
    <>
    <AppLayout>
    <title>Lunar, Project</title>
     <br />
     <br />
     <center>
     { 
    loading ? 
    <>
    <Loading />
    </>
    : 
    <> 
    <center>
    <h2 className="font-extrabold text-2xl">{data.name}</h2>
    <br />
    {/* <btn className='btn btn-error normal-case font-bold'>Delete Project</btn> */}
    <br />
    <div className='flex flex-wrap gap-8 justify-center w-full'>
    { 
    feedback.map((feedback) => {
        return (
            <>
            <Feedback content={feedback.description} title={feedback.title} />
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
    <br /><br />
    </AppLayout>
    </>
  )
}