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
        <button className='bg-red-600 bg-opacity-80 border-none outline-none text-white px-12 py-2 rounded-lg duration-200 hover:bg-red-900 mt-4' onClick={deleteProject}>
        { 
      loading 
      ? <><><span className="loading loading-spinner loading-xs"></span></></>
      : <>{text}</>
      }
        </button>
        </>
    )
}