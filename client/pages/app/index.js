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
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const response = await fetch('/api/app');
      const res = await response.json();
      setUser(res);
      setLoading(false);
    }
    fetchUser();
  }, [])
  return (
    <>
    {loading 
    ? <>Loading </>
    : <>{JSON.stringify(user)}</>
    }
    </>
  )
}