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
import Link from "next/link"
import { UserCircleIcon, Laptop } from "lucide-react"

export default function BillingPage() {
  const [ loading, setLoading ] = useState(true);
  const [ nameLoading, setNameLoading ] = useState(false);
  const [ premium, setPremium ] = useState(false);
  const [ customer_portal, setCustomerPortal ] = '/billing';
  const [ cancel, setCancel ] = useState('/billing')
  const [ user, setUser ] = useState();
  const [ name, setName ] = useState();
  const [ response, setResponse ] = useState();
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
        const response = await fetch('/api/billing');
        const res = await response.json();
        console.log(res);
        if(res.ok == false) {
          router.push('/')
        }
        if(res.ok == true) {
          setPremium(res.response.premium);
          setCancel(res.response.customer_portal);
          setUser(res.response);
          setName(res.response.name);
          setLoading(false);
        }
      }
      fetchUser();
    }, [])
    console.log(cancel);
    return (
        <>
        <AppLayout>
        <title>astralics</title>
        <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Billing</h2>
          <p className="text-muted-foreground">
            Manage Plan, Update Payment or Cancel Subscription.
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
            {
              premium 
              ? 
              <>
              <h1 className='text-xl font-bold tracking-normal flex gap-2'>You are currently subscribed to <Laptop /> Developer </h1>
              </>
              : 
              <>
                <h1 className='text-xl font-bold tracking-normal flex gap-2'>You are currently subscribed to <UserCircleIcon /> Personal</h1>
              </>
            }
          {/* <div>
          <h2 className="text-lg font-medium tracking-tight text-black dark:text-white">Name</h2>
          <Input type="email" placeholder="Email" value={user.name} className='text-black dark:text-white mt-2'/>
          </div>
          <div className='mt-4'>
          <h2 className="text-lg font-medium tracking-tight text-black dark:text-white">Email</h2>
          <Input type="email" placeholder="Email" value={user.email} className='text-black dark:text-white mt-2'/>
          </div>
          <div className='mt-4'>
          <h2 className="text-lg font-medium tracking-tight text-black dark:text-white">Avatar</h2>
          <Input type="email" placeholder="Email"value={user.image} className='text-black dark:text-white mt-2'/>
          </div> */}
          <div className='mt-6 flex gap-4'>
            <Button className="bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-gray-200 hover:border-white/0">
              {/* <Link href={cancel}> */}
              Manage Subscription
              {/* </Link> */}
            </Button>
            <Button variant="destructive">
              Cancel Subscription
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