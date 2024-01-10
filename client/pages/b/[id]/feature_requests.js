import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BoardLayout from "@/components/b/Layout"
import NewBoard from "@/components/b/NewBoard"
import Feedback from "@/components/b/Feedback"
import { motion } from "framer-motion"

export default function Page() {
    const router = useRouter()
    const { id } = router.query;
    const { data: session } = useSession({})
    const [ loading, setLoading ] = useState(false);
    const [ feedbacks, setFeedbacks ] = useState([]);
    const [ sort, setSort ] = useState();
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
            if(res.ok == true && res.auth == true) {
                setFeedbacks(res.sortedFeatureRequests) 
            } else if(res.ok == true && res.auth == false) {
                setFeedbacks(res.sortedFeatureRequests);
            }
            setLoading(false);
        }
        fetchProject();
    }, [id])
  return (
    <>
    <title>Feature Requests</title>
    <BoardLayout>
    { loading === true && 
    <>
    <center>
    <h1 className="text-2xl font-bold">💡 Feature Requests </h1>
            <br /><br />
            <NewBoard session={session}>
                <br /><br /><br />
                <h1 className="text-2xl ">this usually doesn't take long</h1>
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
            <h1 className="text-2xl font-bold">💡 Feature Requests </h1>
            <br /><br />
            <NewBoard session={session} setSort={setSort} sort={sort}>
            {
                    session 
                    ? 
                    <>
                    {
                    feedbacks.map((x, i) => {
                        return (
                            <>
                            <motion.div initial={{opacity: 0,y:-10}} animate={{opacity: 1,y:0}} transition={{duration: 0.5, delay: i * 0.1}}>
                            <Feedback isUpvoted={x.isUpvoted} id={x.id} title={x.title} description={x.description} upvotes={x.itemVotes.length} type={x.type} session={session} itemVotes={x.itemVotes}/>
                            </motion.div>
                            <br />
                            </>
                        )
                    })
                    }
                    </>
                    : 
                    <>
                    {
                    feedbacks.map((x, i) => {
                        return (
                            <>
                            <motion.div initial={{opacity: 0,y:-10}} animate={{opacity: 1,y:0}} transition={{duration: 0.5, delay: i * 0.1}}>
                            <Feedback isUpvoted={false} id={x.id} title={x.title} description={x.description} upvotes={x.itemVotes.length} type={x.type} session={session} itemVotes={x.itemVotes}/>
                            </motion.div>
                            <br />
                            </>
                        )
                    })
                }
                    </>
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