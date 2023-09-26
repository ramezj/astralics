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
  return (
    <>
    <Layout>
    <title>Lunar, Code</title>
     <br />
     <br />
     <center>
        <h1 className="font-medium text-2xl">Embed your Widget</h1>
    </center>
    </Layout>
    </>
  )
}