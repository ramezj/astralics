import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
 
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
            const response = await fetch(`/api/project/${router.query.id}`)
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
    { 
    loading ? <>Loading..</>
    : 
    <> 
    <p>Project Id : {data.id}</p>
    <p>Project Name : {data.name}</p>
    <p>Project Feedbacks : {JSON.stringify(data.feedbacks)}</p>
    </>
    }
    </>
  )
}