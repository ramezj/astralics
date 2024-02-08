import Layout from "@/components/layout"
import { Separator } from "@/components/ui/separator"

export default function Terms() {
    return (
        <>
        <Layout>
            <title>Terms & Conditions</title>
        <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Terms & Conditions</h2>
        </div>
        <Separator className="my-6" />
        <h2 className='text-lg font-bold tracking-tight text-black dark:text-white'>1.Terms & Conditions ( " Terms ")</h2>
        <p className='text-muted-foreground'>
        Please read these Terms of Service (“Terms”, “Terms of Service”) carefully before using the https://astralics.com website (the “Service”) operated by astralics (“us”, “we”, or “our”).
Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.
By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.
        </p>
        <br />
        <h2 className='text-lg font-bold tracking-tight text-black dark:text-white'>2.Privacy</h2>
        <p className='text-muted-foreground'>
        We take great care to protect your data's privacy because it is your data, not ours. Your account will only ever be accessed by us in order to assist you with an issue or fix a software issue. We won't open any files you upload unless you specifically request it.
       </p>
        <br />
        <h2 className='text-lg font-bold tracking-tight text-black dark:text-white'>3.Accounts</h2>
        <p className='text-muted-foreground'>
        You are responsible for maintaining the security of your account and password. The Company cannot and will not be liable for any loss or damage from your failure to comply with this security obligation,
        You are responsible for all content posted and activity that occurs under your account (even when content is posted by others who have their own logins under your account), Your login may only be used by one person – a single login shared by multiple people is not permitted. You may create separate logins for as many people as you'd like, You must be a human. Accounts registered by “bots” or other automated methods are not permitted.
        </p>
        <br />
        <h2 className='text-lg font-bold tracking-tight text-black dark:text-white'>4.Refunds</h2>
        <p className='text-muted-foreground'>
        Astralics may, at its sole discretion, consider and grant specific refund requests for Subscriptions on a case-by-case basis.
        </p>
        </div>
        </Layout>
        </>
    )
}