import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import Card from "@/components/app/Card";


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
    ? <>Loading Projects</>
    :
    <>
    <br />
    <br />
    <br />
    <div className='flex flex-wrap gap-8 justify-center w-full'>
    {projects.map((project) => {
        return (
          <>
          <Card title={project.name} href={`/project/${project.id}`} />
          <br /><br />
          </>
        )
      })}
      </div>
    </>
    }
    </Layout>
    </>
  )
}