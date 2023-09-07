import Layout from "@/components/layout";

export default function page() {
    return (
        <>
        <Layout>
            <center>
                <br />
                <h1 className='text-3xl font-bold'>Installation</h1>
                <br />
                <br />
                <h1 className='text-xl font-bold'>npm</h1>
                <br />
                <div className='w-96 py-2 bg-black bg-opacity-60 rounded-lg shadow-md'>
                    <p className='font-bold'>npm i blitzpackagev2@latest</p>
                </div>
                <br />
                <h1 className='text-xl font-bold'>pnpm</h1>
                <br />
                <div className='w-96 py-2 bg-black bg-opacity-60 rounded-lg shadow-md'>
                    <p className='font-bold'>pnpm i blitzpackagev2@latest</p>
                </div>
                <br />
                <h1 className='text-xl font-bold'>yarn</h1>
                <br />
                <div className='w-96 py-2 bg-black bg-opacity-60 rounded-lg shadow-md'>
                    <p className='font-bold'>yarn add blitzpackagev2@latest</p>
                </div>
            </center>
        </Layout>
        </>
    )
}