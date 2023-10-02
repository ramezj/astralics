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
    <title>Feedback Board</title>
        { loading === false && 
        <>
        <center>
            <br /><br />
            <h1 className="text-2xl font-bold">{data.name}'s Roadmap</h1>
            <br /><br />
            <div className="flex flex-wrap gap-8 place-content-center">
            <BoardFeedbackDiv title={'✨ Planned'} />
            <BoardFeedbackDiv title={'⚒️ In Progress'} />
            <BoardFeedbackDiv title={'🥳 Done'} />
            </div>
            <br />
            <br />
        </center>
        </>
        }
    </Layout>
    </>
  )
}