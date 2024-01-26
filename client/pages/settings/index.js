import Layout from "@/components/layout"
import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MainCard from "@/components/settings/src/MainCard"
import Loading from "@/components/settings/Loading"
import AppLayout from "@/components/app/AppLayout"
import { Separator } from "@/components/ui/separator"

export default function Settings() {
    const [ loading, setLoading ] = useState(true);
    const [ premium, setPremium ] = useState(false);
    const [ user, setUser ] = useState();
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
    return (
        <>
        <AppLayout>
        <title>Lunar, Settings</title>
            <center>
                <div className="mt-4">
                    {
                        loading 
                        ? <><Loading/></>
                        : <>
                        <MainCard profileName={user.name} profileEmail={user.email} profileAvatar={user.image} session={session}/>
                        </>
                    }
                </div>
            </center>
            {/* <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            {/* <SidebarNav items={sidebarNavItems} /> */}
          {/* </aside>
          <div className="flex-1 lg:max-w-2xl"></div>
        </div>
      </div>  */}
        </AppLayout>
        </>
    )
}