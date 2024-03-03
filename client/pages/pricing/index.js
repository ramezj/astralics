import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Layout from '@/components/layout';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { PaddleLoader } from '@/components/PaddleLoader';
import { Free } from '@/components/pricing/Free';
import { Developer } from '@/components/pricing/Developer';

export default function Pricing(props) {
    const signUserIn = async () => {
        signIn('google');
    }
    const { data: session } = useSession({})
    return (
        <>
        <Layout >
            <title>astralics</title>
            <PaddleLoader />
            <center>
            <br /><br />
            <div className='space-y-2'>
                <h1 className='text-4xl font-bold text-black dark:text-white'>Pricing</h1>
                <p className="text-muted-foreground">
                Prices listed reflect the monthly subscription fee.
                </p>
            </div>
            <p className="text-muted-foreground -mt-1">
                <Link href='/terms' className='text-astralicsblue font-bold underline decoration-dotted'>terms & conditions</Link>
            </p>
            </center>
            <br />
            <br />
            <div className='flex flex-wrap gap-8 justify-center w-full'>
                <Free session={session}/>
                <Developer session={session}/>
            </div>    
            <br />  
        </Layout>
        </>
    )
}