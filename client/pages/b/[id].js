import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BoardFeedbackDiv from "@/components/b/BoardFeedbackDiv"
import BoardLayout from "@/components/b/Layout"
import Layout from "@/components/layout"
import Loading from "@/components/b/Loading"
import NewBoard from "@/components/b/NewBoard"
import Feedback from "@/components/b/Feedback"


export default function Page() {
    const router = useRouter()
    const { id } = router.query;
    const { data: session } = useSession({})
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState(false); 
    const [ feedbacks, setFeedbacks ] = useState([]);
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
    <title>Feedback Board</title>
    { loading === true && 
    <>
    <center>
            <br /><br /><br />
            <h1 className="text-2xl font-bold">Feedback Board</h1>
            <br /><br />
            <NewBoard>
                <Loading />
                <br />
                <Loading />
                <br />
                <Loading />
            </NewBoard>
            <br />
            <br />
        </center>
    </>
    }
        { loading === false && 
        <>
        <center>
        <br /><br /><br />
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <br /><br />
            {/* <BoardFeedbackDiv title={'🐛 Bug Report'} />
            <BoardFeedbackDiv title={'💡 Feature Request'} />
            <BoardFeedbackDiv title={'💬 Other'} /> */}
            <NewBoard>
                {
                    feedbacks.map((x) => {
                        return (
                            <>
                            <Feedback title={x.title} description={x.description} upvotes={x.upvotes} type={x.type} />
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