import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import Card from "@/components/app/Card";
import Loading from "@/components/app/Loading";
import { motion } from 'framer-motion'
import Create from "@/components/app/Create";

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
    <Layout>
      
    <title>Lunar, App</title>
    {loading 
    ?
    <>
    <Loading />
    </>
    :
    <>
    <br />
    <center>
      <div className='sm:w-4/5'>
        <h1 className="2xl:text-2xl text-2xl font-bold">boards</h1>
      </div>
      <br /><br />
      <Create />
    {/* <Premium premium={premium} /> */}
    </center>
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
        {boards.map((board) => {
        return (
          <motion.div
          initial={{opacity: 0 }}
      animate={{opacity: 1 }}
      exit={{opacity: 0 }}
      transition={{
        duration:1
      }}
          >
          <Card title={board.name} href={`/board/${board.id}`} website={board.website} settings={`/settings/${board.id}`} handle={`/b/${board.handle}`}/>
          </motion.div>
        )
      })}
        </>
      }
      </div>
    </>
    }
    </Layout>
    </>
  )
}