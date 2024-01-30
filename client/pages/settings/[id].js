import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from "@/components/layout"
import { motion } from "framer-motion"
import Card from "@/components/settings/Card"
import Loading from "@/components/settings/Loading"
import AppLayout from "@/components/app/AppLayout"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

export default function Page() {
    const router = useRouter()
    const { id } = router.query;
    const { data: session } = useSession({})
    const [ loading, setLoading ] = useState(false);
    const [ deleteLoading, setDeleteLoading ] = useState(false);
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
    const deleteProject = async () => {
      setDeleteLoading(true);
      const response = await fetch(`/api/settings/delete/${router.query.id}`);
      const resp = await response.json();
      if(resp.ok == true) {
          setLoading(false);
          router.push('/app')
      } else {
          if(resp.ok == false) {
              console.error('Sometrhing Went Wrnog')
          }
      }
  }
  return (
    <>
<AppLayout>
        <title>Lunar, Settings</title>
        <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Board Settings</h2>
          <p className="text-muted-foreground">
            Manage your board settings and set preferences.
          </p>
        </div>
        <Separator className="my-6" />
        {
          loading
          ? 
          <>
          <p className="mt-2 text-lg font-bold tracking-tight text-black dark:text-white">Loading</p>
          </>
          : 
          <>
          <div className="2xl:w-2/5 w-full">
          <div>
          <h2 className="text-lg font-medium tracking-tight text-black dark:text-white">ID</h2>
          <Input type="email" placeholder="Email" value={data.id} className='text-black dark:text-white mt-2'/>
          </div>
          <div className='mt-4'>
          <h2 className="text-lg font-medium tracking-tight text-black dark:text-white">Name</h2>
          <Input type="email" placeholder="Email" value={data.name} className='text-black dark:text-white mt-2'/>
          </div>
          <div className='mt-4'>
          <h2 className="text-lg font-medium tracking-tight text-black dark:text-white">Website</h2>
          <Input type="email" placeholder="Email"value={data.website} className='text-black dark:text-white mt-2'/>
          </div>
          <div className='mt-6 flex gap-4'>
          {
            deleteLoading 
            ? (
              <>
              <Button disabled variant="destructive" onClick={deleteProject}>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Deleting
              </Button>
              </>
            )
            : (
              <>
              <Button variant="destructive" onClick={deleteProject}>
              Delete Project
              </Button>
              </>
            )
          }
          <Button className="bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-gray-200 hover:border-white/0">
            Save Changes
          </Button>
          </div>
          </div>
          </>
        }
      </div> 
        </AppLayout>
    </>
  )
}