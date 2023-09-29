import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from "@/components/layout"
import BoardFeedbackDiv from "@/components/b/BoardFeedbackDiv"

export default function Page() {
    const router = useRouter()
    const { id } = router.query;
    const { data: session } = useSession({})
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState(false); 
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
            setLoading(false);
        }
        fetchProject();
    }, [id])
  return (
    <>
    <Layout>
        { loading === false && 
        <>
        <center>
            <br />
            <div className="card w-4/5 bg-black duration-300">
            <div className="card-body items-center">
            <h1 className="font-bold text-2xl">{data.name}'s Feedback Board</h1>
            <br />
            {
                data.feedbacks.map((feedback) => {
                    return (
                        <BoardFeedbackDiv feedback={feedback.body}/>
                    )
                })
            }
            </div>
            </div>
        </center>
        </>
        }
    </Layout>
    </>
  )
}