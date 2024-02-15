import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Card from "@/components/app/Card";
import Loading from "@/components/app/Loading";
import { motion } from 'framer-motion'
import AppLayout from "@/components/app/AppLayout";

export default function Component() {
  const router = useRouter();
  const { data: session } = useSession({
    required:true,
    onUnauthenticated() {
        router.push('/');
    }
  })
  const [ loading, setLoading ] = useState(false);
  const [ boards, setBoards ] = useState([]);
  const [ premium, setPremium ] = useState(false);
  const [ noBoards, setNoBoards ] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const response = await fetch('/api/app');
      const res = await response.json();
      if(res.ok == false) {
        router.push('/')
      }
      if(res.ok == true) {
        if(res.response.boards.length < 1) {
          setNoBoards(true);
        }
        if(res.response.premium == false) {
          setPremium(false);
        } else if (res.response.premium == true) {
          setPremium(true);
        }
        setBoards(res.response.boards);
        setLoading(false);
      }
    }
    fetchUser();
  }, [])
  return (
    <>
    <AppLayout>
    <title>astralics</title>
    <br /><br />
    <center>
      <div className="space-y-1">
        <h1 className='text-3xl font-bold text-black dark:text-white'>Hi, Welcome back 👋</h1>
          <p className="text-muted-foreground">
          Below you'll find all your feedback boards.
          </p>
      </div>
    </center>
    {loading 
    ?
    <>
    <Loading />
    </>
    :
    <>
    <br /><br />
    <div className='flex flex-wrap gap-8 justify-center w-full'>
      {
        noBoards 
        ? 
        <>
        <center>
          <h1 className="text-2xl 2xl:text-lg lg:text-lg md:text-lg font-bold">No boards yet, Start by creating a project</h1>
        </center>
        </>
        : 
        <>
        {boards.map((board, i) => {
        return (
          <motion.div
                            initial={{
                                 opacity: 0,
                                y:-10
                            }}
                            animate={{
                                opacity: 1,
                                y:0
                            }}
                            transition={{duration: 0.5, delay: i * 0.15}}
                            >
          <Card title={board.name} href={`/${board.handle}`} website={board.website} settings={`/settings/${board.id}`} handle={`/${board.handle}`}/>
          </motion.div>
        )
      })}
        </>
      }
      </div>
    </>
    }
    </AppLayout>
    </>
  )
}