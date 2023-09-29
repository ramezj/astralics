import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from "@/components/layout"
import { motion } from "framer-motion"
import Feedback from "@/components/board/Feedback"
import Loading from "@/components/board/Loading"
import Widget from "@/components/widget"

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
            <div className='w-3/5 bg-black rounded-lg bg-opacity-80'>
                <br />
                <h1 className="font-bold text-2xl h-96">{data.name}'s Feedback Board</h1>
                <button className="btn bg-blue-500 hover:bg-blue-700">Send Feedback</button>
            </div>
        </center>
        </>
        }
    </Layout>
    </>
  )
}