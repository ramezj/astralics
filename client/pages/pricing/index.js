import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Layout from '@/components/layout';
import PricingCard from '@/components/pricing/PricingCard';
import Info from '@/components/pricing/Info';
import Svg from '@/components/pricing/svg';
import Xsvg from '@/components/pricing/Xsvg';
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
                {/* <PricingCard price='$0' title='Starter' button='Get Started' shadow={'shadow-lg'}>
                <Info><Svg /> 1 Board</Info>
                <Info><Svg /> 20 Feedbacks</Info>
                <Info><Svg /> Authentication Check</Info>
                <br />
                {
                session 
                ? <><Link href='/app' className='duration-200 text-center py-2 w-full text-white normal-case bg-blue-700 hover:bg-blue-800 outline-none border-none font-bold rounded-md -mb-2 align-middle'>Go to Dashboard</Link></>
                : <><button onClick={signUserIn} className='duration-200 py-2 w-full text-white normal-case bg-blue-700 hover:bg-blue-800 outline-none border-none font-bold rounded-md -mb-2'>Get Started</button></>
                }
                </PricingCard >
                <PricingCard price='$15' title='Developer' button='Get Started' background={''} shadow={'shadow-lg'}>
                <Info><Svg /> Up to 5 Boards</Info>
                <Info><Svg /> Unlimited Monthly Feedbacks</Info>
                <Info><Svg /> Authentication Check</Info>
                <br />
                {
                session 
                ? <><button onClick={(() => {
                    Paddle.Checkout.open({
                        product:873402,
                        success:'/success',
                        passthrough: session.user.id
                      })
                })} 
                className='duration-200 py-2 w-full text-white normal-case bg-blue-700 hover:bg-blue-800 outline-none border-none font-bold rounded-md -mb-2'>
                 Subscribe Now</button></>
                : <><button onClick={signUserIn} className='duration-200 py-2 w-full text-white normal-case bg-blue-700 hover:bg-blue-800 outline-none border-none font-bold rounded-md -mb-2'>
                    Get Started</button></>
                }
                </PricingCard > */}
            </div>    
            <br />  
        </Layout>
        </>
    )
}