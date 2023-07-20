import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from "@/components/layout"
import Idea from "@/components/project/Idea"
import Bugs from "@/components/project/Bugs" 
import Other from "@/components/project/Other"

export default function Page() {
    const router = useRouter()
    const { id } = router.query;
    const { data: session } = useSession({})
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState(false); 
    const [ feedback, setFeedback ] = useState([])
    const [ bugs, setBugs ] = useState([])
    const [ ideas, setIdeas ] = useState([])
    const [ other, setOther ] = useState([])
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
            // if(feedback) {
            //     for (let index = 0; index < feedback.length; index++) {
            //         console.log(feedback[index])
                    
            //     }
            // }
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
        <div className="flex flex-wrap gap-8 justify-center w-full">
                <Bugs >
                </Bugs>
                <Idea >
                </Idea>
                <Other>
                </Other>
        </div>
    </center>
    </Layout>
    </>
  )
}