import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from "@/components/layout"
import { motion } from "framer-motion"
import Card from "@/components/settings/Card"
import Loading from "@/components/settings/Loading"

export default function Page() {
    const router = useRouter()
    const { id } = router.query;
    const { data: session } = useSession({})
    const [ loading, setLoading ] = useState(false);
    const [ projectName, setProjectName ] = useState();
    const [ projectWebsite, setProjectWebsite ] = useState();
    const [ data, setData ] = useState(false); 
    useEffect(() => {
        if(!id) {
            return;
        }
        const fetchProject = async () => {
            setLoading(true);
            const response = await fetch(`/api/settings/${router.query.id}`)
            const res = await response.json();
            if(res.ok == false) {
                return router.push('/404')
            }
            setProjectName(res.response.name);
            setProjectWebsite(res.response.website);
            setData(res.response);
            setLoading(false);
        }
        fetchProject();
    }, [id])
  return (
    <>
    <Layout>
     <br />
     <br />
     <center>
     { 
    loading ? 
    <>
    <Loading />
    </>
    : 
    <> 
    <center>
    <h2 className="font-extrabold text-2xl">{data.name}</h2>
    <br />
    <br />
    <Card projectId={data.id} projectName={data.name} projectWebsite={data.website}/>
    </center>
    </>
    }
    </center>
    </Layout>
    </>
  )
}