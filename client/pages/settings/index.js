import Layout from "@/components/layout"
import { useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MainCard from "@/components/settings/src/MainCard"
import Loading from "@/components/settings/Loading"
import AppLayout from "@/components/app/AppLayout"

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
        </AppLayout>
        </>
    )
}