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
            <h1 className="text-2xl font-bold">{data.name}'s Feedback Board</h1>
            <br /><br />
            <div className="flex flex-wrap gap-8 place-content-center">
                <button className='text-white bg-neutral-900 hover:bg-neutral-950 normal-case px-16 py-2.5 rounded-lg font-medium shadow-md'>💡 Feature Request</button>
                <button className='text-white bg-neutral-900 hover:bg-neutral-950 normal-case px-16 py-2.5 rounded-lg font-medium shadow-md'>🐛 Bug Report</button>
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