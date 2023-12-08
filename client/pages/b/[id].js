import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BoardFeedbackDiv from "@/components/b/BoardFeedbackDiv"
import BoardLayout from "@/components/b/Layout"
import Layout from "@/components/layout"
import Loading from "@/components/b/Loading"
import NewBoard from "@/components/b/NewBoard"
import Feedback from "@/components/b/Feedback"
import { motion } from "framer-motion"

export default function Page() {
    const router = useRouter()
    const { id } = router.query;
    const { data: session } = useSession({})
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState(false); 
    const [ feedbacks, setFeedbacks ] = useState([]);
    const [ upvotes, setUpvotes ] = useState();
    useEffect(() => {
        if(!id) {
            return;
        }
        const fetchProject = async () => {
            setLoading(true);
            const response = await fetch(`/api/b/${router.query.id}`)
            const res = await response.json();
            if(res.ok == false) {
                return router.push('/404')
            }
            setData(res.response);
            setFeedbacks(res.response.feedbacks);
            console.log(res.response);
            setLoading(false);
        }
        fetchProject();
    }, [id])
  return (
    <>
    <BoardLayout>
    <title>{router.query.id}</title>
    <br /><br />
    { loading === true && 
    <>
    <center>
            <h1 className="text-2xl font-bold">{router.query.id}</h1>
            <br /><br />
            <NewBoard>
                {/* <Loading /> */}
                <br /><br /><br />
                <h1 className="text-2xl ">this usually doesn't take long :)</h1>
                <br />
            </NewBoard>
            <br />
            <br />
        </center>
    </>
    }
        { loading === false && 
        <>
        <center>
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <br /><br />
            <NewBoard>
                {
                    feedbacks.map((x, i) => {
                        return (
                            <>
                            <motion.div
                            initial={{
                                 opacity: 0,
                                y:-10
                            }}
                            animate={{
                                opacity: 1,
                                y:0
                            }}
                            transition={{duration: 0.5, delay: i * 0.1}}
                            >
                            <Feedback id={x.id} title={x.title} description={x.description} upvotes={x.itemVotes.length} type={x.type} session={session} itemVotes={x.itemVotes}/>
                            </motion.div>
                            <br />
                            </>
                        )
                    })
                }
            </NewBoard>
            <br />
            <br />
        </center>
        </>
        }
    </BoardLayout>
    </>
  )
}