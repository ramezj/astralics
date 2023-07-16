import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Component() {
  const router = useRouter();
  const { data: session } = useSession({
    required:true,
    onUnauthenticated() {
        router.push('/');
    }
  })
  const [ loading, setLoading ] = useState(false);
  const [ user, setUser ] = useState();
  const [ projects, setProjects ] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const response = await fetch('/api/app');
      const res = await response.json();
      setUser(res.user);
      setProjects(res.user.projects);
      setLoading(false);
    }
    fetchUser();
  }, [])
  return (
    <>
    {loading 
    ? <>Loading Projects</>
    :
    <>
    <br />
    {projects.map((project) => {
        return (
          <>
          <a href={`/project/${project.id}`} className="cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" key={project.id}>{project.name}</a>
          <br /><br />
          </>
        )
      })}
    </>
    }
    </>
  )
}