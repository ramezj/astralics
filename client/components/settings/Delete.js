import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Delete(props) {
    const router = useRouter();
    const deleteProject = async () => {
        const response = await fetch(`/api/settings/delete/${props.projectId}`);
        const resp = await response.json();
        if(resp.ok == true) {
            router.push('/app')
        } else {
            if(resp.ok == false) {
                console.error('Sometrhing Went Wrnog')
            }
        }
    }
    return (
        <>
        <button className='btn bg-red-700 text-white border-none normal-case font-medium hover:bg-red-900' onClick={deleteProject}>Delete Project</button>
        </>
    )
}