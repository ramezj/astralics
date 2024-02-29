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
import { UserCircleIcon, Laptop, ArrowUpRightSquare } from "lucide-react"

export default function BillingPage() {
  const [ loading, setLoading ] = useState(true);
  const [ nameLoading, setNameLoading ] = useState(false);
  const [ premium, setPremium ] = useState(false);
  const [ updatePayment, setUpdatePayment ] = useState('/pricing');
  const [ cancel, setCancel ] = useState('/pricing')
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
          if(res.response.update_payment_method === null) {
            setUpdatePayment('/pricing');
          } else {
            setUpdatePayment(res.response.update_payment_method);
          }
          if(res.response.customer_portal === null) {
            setCancel('/pricing');
          } else {
            setCancel(res.response.customer_portal);
          }
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
                <Link target="_blank" href='/pricing' className='flex text-black dark:text-white font-bold underline decoration-dotted gap-2 mt-2'>Upgrade to Developer <ArrowUpRightSquare/></Link>
              </>
            }
          <div className='mt-6 flex gap-4'>
            {
              premium 
              ? 
              <>
              <Button className="bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-gray-200 hover:border-white/0">
              <Link href={cancel}>
              Manage Subscription
              </Link>
            </Button>
            <Button className="bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-gray-200 hover:border-white/0">
              <Link href={updatePayment}>
              Change Payment Method
              </Link>
            </Button>
            <Button variant="destructive">
              <Link href={cancel}>
                Cancel Subscription
              </Link>
            </Button>
              </>
              :
              <>
              </>
            }
          </div>
          </div>
          </>
        }
      </div> 
        </AppLayout>
        </>
    )
}