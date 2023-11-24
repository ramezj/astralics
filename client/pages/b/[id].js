import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BoardFeedbackDiv from "@/components/b/BoardFeedbackDiv"
import BoardLayout from "@/components/b/Layout"
import Layout from "@/components/layout"
import Loading from "@/components/board/Loading"


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
            console.log(res.response);
            setLoading(false);
        }
        fetchProject();
    }, [id])
  return (
    <>
    <Layout>
    <title>Lunar, Feedback Board</title>
    { loading === true && 
    <>
    <center>
        <br />
        <br /><br />
        <div className="flex flex-wrap gap-8 place-content-center">
        <BoardFeedbackDiv title={'Loading..'} />
        <BoardFeedbackDiv title={'Loading..'} />
        <BoardFeedbackDiv title={'Loading..'} />
        </div>
        <br />
        <br />
    </center>
    </>
    }
        { loading === false && 
        <>
        <center>
            <br />
            <h1 className="text-2xl font-bold">{data.name}'s Feedback Board</h1>
            <br /><br />
            <div className="flex flex-wrap gap-8 place-content-center">
            <BoardFeedbackDiv title={'🐛 Bug Report'} />
            <BoardFeedbackDiv title={'💡 Feature Request'} />
            <BoardFeedbackDiv title={'💬 Other'} />
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