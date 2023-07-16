import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DarkButton from "@/components/buttons/dark"
 
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
    { 
    loading ? <>Loading..</>
    : 
    <> 
    <center>
    <DarkButton>{data.name}</DarkButton>
    <p>Project Feedbacks : </p>
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
    </>
  )
}