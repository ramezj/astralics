import React, { useState, useEffect } from 'react';
import { signIn, signOut } from 'next-auth/react';
import Layout from '@/components/layout';
import PricingCard from '@/components/pricing/PricingCard';

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
                <PricingCard price='Free' title='Starter' button='Get Started' background={'whiteBackground'} shadow={''}/>
                <PricingCard price='$5.99' title='Pro' button='Get Started' background={'backgroundColor'} shadow={'widgetShadow'}/>
                <PricingCard price='$75.00' title='Teams' button='Get Started' background={'whiteBackground'} shadow={''} />
            </div>
        </Layout>
        </>
    )
}