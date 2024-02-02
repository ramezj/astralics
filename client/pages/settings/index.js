import Layout from "@/components/layout"
import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MainCard from "@/components/settings/src/MainCard"
import Loading from "@/components/settings/Loading"
import AppLayout from "@/components/app/AppLayout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"


export default function Settings() {
    const [ loading, setLoading ] = useState(true);
    const [ nameLoading, setNameLoading ] = useState(false);
    const [ premium, setPremium ] = useState(false);
    const [ user, setUser ] = useState();
    const [ name, setName ] = useState();
    const router = useRouter();
    const { data: session } = useSession({
        required:true,
        onUnauthenticated() {
            router.push('/');
        }
    })
    useEffect(() => {
        const fetchUser = async () => {
          setLoading(true);
          const response = await fetch('/api/app');
          const res = await response.json();
          console.log(res);
          if(res.ok == false) {
            router.push('/')
          }
          if(res.ok == true) {
            if(res.response.premium == false) {
              setPremium(false);
            } else if (res.response.premium == true) {
              setPremium(true);
            }
            setUser(res.response);
            setLoading(false);
          }
        }
        fetchUser();
      }, [])
      const fetchSettings = async () => {
        setNameLoading(true);
        const response = await fetch(`/api/settings`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                name:name
            })
        });
        const res = await response.json();
            setLoading(false);
            setResponse(res.response);
    }
    return (
        <>
        <AppLayout>
        <title>Settings</title>
        <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and change your avatar.
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
          <h2 className="text-lg font-medium tracking-tight text-black dark:text-white">Name</h2>
          <Input type="email" placeholder="Name" value={user.name} onChange={((e) => {setName(e.target.value)})} className='text-black dark:text-white mt-2'/>
          </div>
          <div className='mt-4'>
          <h2 className="text-lg font-medium tracking-tight text-black dark:text-white">Email</h2>
          <Input type="email" placeholder="Email" value={user.email} className='text-black dark:text-white mt-2'/>
          </div>
          <div className='mt-4'>
          <h2 className="text-lg font-medium tracking-tight text-black dark:text-white">Avatar</h2>
          <Input type="email" placeholder="Email"value={user.image} className='text-black dark:text-white mt-2'/>
          </div>
          <div className='mt-6'>
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