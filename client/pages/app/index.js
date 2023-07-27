import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import Card from "@/components/app/Card";
import Loading from "@/components/app/Loading";
import { motion } from 'framer-motion'
import Create from "@/components/project/Create";

export default function Component() {
  const router = useRouter();
  const { data: session } = useSession({
    required:true,
    onUnauthenticated() {
        router.push('/');
    }
  })
  const [ loading, setLoading ] = useState(false);
  const [ projects, setProjects ] = useState([]);
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
        setProjects(res.response.projects);
        setLoading(false);
      }
    }
    fetchUser();
  }, [])
  return (
    <>
    <Layout>
    {loading 
    ?
    <>
    <Loading />
    </>
    :
    <>
    <br />
    <br />
    <center>
    <h2 className="font-extrabold text-2xl">Hello {session?.user.name}</h2>
    <br />
    <Create />
    <br />
    <br />
    </center>
    <div className='flex flex-wrap gap-8 justify-center w-full'>
    {projects.map((project) => {
        return (
          <motion.div
          initial={{opacity: 0 }}
      animate={{opacity: 1 }}
      exit={{opacity: 0 }}
      transition={{
        duration:1
      }}
          >
          <Card title={project.name} href={`/project/${project.id}`} website={project.website} settings={`/settings/${project.id}`} />
          </motion.div>
        )
      })}
      </div>
    </>
    }
    </Layout>
    </>
  )
}