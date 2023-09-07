import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Delete(props) {
    const [ loading, setLoading ] = useState(false);
    const [ text, setText ] = useState('Delete Project')
    const router = useRouter();
    const deleteProject = async () => {
        setLoading(true);
        const response = await fetch(`/api/settings/delete/${props.projectId}`);
        const resp = await response.json();
        if(resp.ok == true) {
            setLoading(false);
            setText('Deleted Successfully')
            router.push('/app')
        } else {
            if(resp.ok == false) {
                setLoading(false);
                setText('Something went wrong..')
                console.error('Sometrhing Went Wrnog')
            }
        }
    }
    return (
        <>
        <button className='btn bg-red-700 px-8 text-white border-none normal-case font-medium hover:bg-red-900' onClick={deleteProject}>
        { 
      loading 
      ? <><><span className="loading loading-spinner loading-xs"></span></></>
      : <>{text}</>
      }
        </button>
        </>
    )
}