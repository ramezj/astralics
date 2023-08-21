import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Layout from '@/components/layout';
import PricingCard from '@/components/pricing/PricingCard';
import Info from '@/components/pricing/Info';
import Svg from '@/components/pricing/svg';
import { PaddleLoader } from '@/components/PaddleLoader';

export default function Pricing(props) {
    const signUserIn = async () => {
        signIn('google');
    }
    const { data: session } = useSession({})
    console.log(session);
    return (
        <>
        <Layout >
            <PaddleLoader />
            <br />
            <center>
                <h1 className='text-3xl font-bold'>Pricing</h1>
            </center>
            <br /><br />
            <div className='flex flex-wrap gap-12 justify-center w-full'>
                <PricingCard price='Free' title='Free' button='Get Started' background={'whiteBackground'} shadow={''}>
                <Info><Svg /> 1 Project</Info>
                <Info><Svg /> 50 Monthly Feedbacks</Info>
                <br />
                {
                session 
                ? <><Link href='/app' className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Go to Dashboard</Link></>
                : <><button onClick={signUserIn} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Get Started</button></>
                }
                </PricingCard >
                <PricingCard price='$3.99' title='Premium' button='Get Started' background={'backgroundColor'} shadow={'widgetShadow'}>
                <Info><Svg /> 3 Project</Info>
                <Info><Svg /> 500 Monthly Feedbacks</Info>
                <br />
                {
                session 
                ? <><button onClick={(() => {
                    Paddle.Checkout.open({
                      product:63325,
                      success:'/success'
                    })
                })} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Subscribe Now</button></>
                : <><button onClick={signUserIn} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Get Started</button></>
                }
                </PricingCard >
                <PricingCard price='$75.00' title='Teams' button='Get Started' background={'whiteBackground'} shadow={''}>
                <Info><Svg /> Unlimited Projects</Info>
                <Info><Svg /> Unlimited Feedbacks</Info>
                <br />
                {
                session 
                ? <><button onClick={(() => {
                    Paddle.Checkout.open({
                      product:63601,
                      success:'/success'
                    })
                })} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Subscribe Now</button></>
                : <><button onClick={signUserIn} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Get Started</button></>
                }
                </PricingCard >
            </div>  
            {/* <div className='flex flex-wrap gap-12 justify-center w-full'>
                <PricingCard price='Free' title='Starter' button='Get Started' background={'whiteBackground'} shadow={''}>
                <Info><Svg /> 1 Project</Info>
                <Info><Svg /> 25 Monthly Feedbacks</Info>
                <Info><Svg /> 1 Project</Info>
                <Info><Svg /> 1 Project</Info>
                <br />
                {
                session 
                ? <><Link href='/app' className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Go to Dashboard</Link></>
                : <><button onClick={signUserIn} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Get Started</button></>
                }
                </PricingCard>
                <PricingCard price='$5.99' title='Pro' button='Get Started' background={'backgroundColor'} shadow={'widgetShadow'}>
                <Info><Svg /> 3 Projects</Info>
                <Info><Svg /> Unlimited Feedbacks</Info>
                <Info><Svg /> 1 Project</Info>
                <Info><Svg /> 1 Project</Info>
                <br />
                {
                session 
                ? <><button onClick={(() => {
                    Paddle.Checkout.open({
                      product:63325,
                      success:'/success'
                    })
                })} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Subscribe Now</button></>
                : <><button onClick={signUserIn} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Get Started</button></>
                }
                </PricingCard>
                <PricingCard price='$75.00' title='Teams' button='Get Started' background={'whiteBackground'} shadow={''}>
                <Info><Svg /> Unlimited Projects</Info>
                <Info><Svg /> Unlimited Feedbacks</Info>
                <Info><Svg /> 1 Project</Info>
                <Info><Svg /> 1 Project</Info>
                <br />
                {
                session 
                ? <><button onClick={(() => {
                    Paddle.Checkout.open({
                      product:63601,
                      success:'/success'
                    })
                })} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Subscribe Now</button></>
                : <><button onClick={signUserIn} className='shadow-xl btn w-full text-white normal-case bg-zinc-950 hover:bg-zinc-950 outline-none border-none font-bold rounded-xl'>Get Started</button></>
                }
                </PricingCard>
            </div> */}
            
        </Layout>
        </>
    )
}