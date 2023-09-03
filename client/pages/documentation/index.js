import Layout from "@/components/layout"
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, CheckIcon, ClipboardDocumentListIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import DocumentationCard from "@/components/documentation/Card";

export default function documentation() {
    const [ npmCopy, setNpmCopy ] = useState(false);
    const copyNPM = async () => {
        navigator.clipboard.writeText('npm i blitzpackage@latest');
        setNpmCopy(true);
    }
    const importText = 'import { BlitzFeedback } from "blitzpackagev2"';
    return (
        <>
        <Layout>
            <center>
                <br />
                <h1 className='font-bold text-4xl'>API Documentation</h1>
                <br />
                <br />
                <div className='flex flex-wrap gap-8 justify-center w-4/5'>
                <DocumentationCard name='Installation 🔨' redirect='/documentation/installation'/>
                <DocumentationCard name='API Key 🔑' redirect='/documentation/api'/>
                </div>
                <div className='flex flex-wrap gap-8 justify-center w-4/5 mt-8'>
                <DocumentationCard name='Configuration ⚙️' redirect='/documentation/configuration'/>
                <DocumentationCard name='React JS' redirect='/documentation/api'/>
                </div>
            </center> 
        </Layout>
        </>
    )
}