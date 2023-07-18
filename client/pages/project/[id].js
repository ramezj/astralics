import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DarkButton from "@/components/buttons/dark"
import Layout from "@/components/layout"
 
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
    { 
    feedback.map((feedback) => {
        return (
            <>
            <p>{feedback.body}</p>
            </>
        )
    })
    }
    
    </center>
    </>
    }
    </center>
    </Layout>
    </>
  )
}