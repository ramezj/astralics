import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Layout from '@/components/layout';
import PricingCard from '@/components/pricing/PricingCard';
import Info from '@/components/pricing/Info';
import Svg from '@/components/pricing/svg';
import { PaddleLoader } from '@/components/PaddleLoader';
import { CreditCardIcon } from '@heroicons/react/24/outline';

export default function Pricing(props) {
    const signUserIn = async () => {
        signIn('google');
    }
    const { data: session } = useSession({})
    return (
        <>
        <Layout >
            <title>Lunar, Pricing</title>
            <PaddleLoader />
            <center>
            <br />
            <h1 className='text-4xl font-bold'>Pricing</h1>
            </center>
            <br />
            <br />
            <div className='flex flex-wrap gap-12 justify-center w-full'>
                <PricingCard price='$0' title='Starter' button='Get Started' background={'bg-black bg-opacity-60'} shadow={'shadow-lg'}>
                <Info><Svg /> 1 Project</Info>
                <Info><Svg /> 50 Monthly Feedbacks</Info>
                <br />
                {
                session 
                ? <><Link href='/app' className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Go to Dashboard</Link></>
                : <><button onClick={signUserIn} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Get Started</button></>
                }
                </PricingCard >
                <PricingCard price='$7' title='Developer' button='Get Started' background={'bg-black bg-opacity-60'} shadow={'shadow-lg'}>
                <Info><Svg /> Unlimited Projects</Info>
                <Info><Svg /> Unlimited Monthly Feedbacks</Info>
                <br />
                {
                session 
                ? <><button onClick={(() => {
                    Paddle.Checkout.open({
                      product:63325,
                      success:'/success',
                      passthrough: session.user.id
                    })
                })} 
                className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>
                    <CreditCardIcon className='text-white' width={22} height={22} />
                 Subscribe Now</button></>
                : <><button onClick={signUserIn} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>
                    <CreditCardIcon className='text-white' width={22} height={22} />
                    Get Started</button></>
                }
                </PricingCard >
            </div>    
            <br />  
        </Layout>
        </>
    )
}