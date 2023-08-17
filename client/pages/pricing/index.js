import React, { useState, useEffect } from 'react';
import { signIn, signOut } from 'next-auth/react';
import Layout from '@/components/layout';
import PricingCard from '@/components/pricing/PricingCard';
import Info from '@/components/pricing/Info';

export default function Pricing(props) {
    return (
        <>
        <Layout >
            <br />
            <center>
                <h1 className='text-3xl font-bold'>Pricing</h1>
            </center>
            <br /><br />
            <div className='flex flex-wrap gap-12 justify-center w-full'>
                <PricingCard price='Free' title='Starter' button='Get Started' background={'whiteBackground'} shadow={''}>
                <Info>1 Project</Info>
                <Info>25 Monthly Feedbacks</Info>
                <Info>1 Project</Info>
                <Info>1 Project</Info>
                <br />
                <button className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Get Started</button>
                </PricingCard>
                <PricingCard price='$5.99' title='Pro' button='Get Started' background={'backgroundColor'} shadow={'widgetShadow'}>
                <Info>3 Projects</Info>
                <Info>300 Monthly Feedbacks</Info>
                <Info>1 Project</Info>
                <Info>1 Project</Info>
                <br />
                <button className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Get Started</button>
                </PricingCard>
                <PricingCard price='$75.00' title='Teams' button='Get Started' background={'whiteBackground'} shadow={''}>
                <Info>Unlimited Projects</Info>
                <Info>Unlimited Monthly Feedbacks</Info>
                <Info>1 Project</Info>
                <Info>1 Project</Info>
                <br />
                <button className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Get Started</button>
                </PricingCard>
            </div>
            <br /><br />
        </Layout>
        </>
    )
}