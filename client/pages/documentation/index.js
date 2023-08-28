import Layout from "@/components/layout"
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, CheckIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

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
                <h1 className='font-bold text-lg'>Start by installing the package</h1>
                <br />
            <div className='w-72 py-2.5 documentationBackground widgetShadow rounded-lg'>
            <p className="font-medium flex justify-center gap-x-3">npm i blitzpackage@latest
            {
                npmCopy 
                ? <><CheckIcon className='flex cursor-pointer' width={24}  height={24} /></>
                : <><ClipboardDocumentIcon onClick={copyNPM} className='flex cursor-pointer' width={24}  height={24}/></>
            } 
            </p>    
            </div>
            <br />
            <div className='w-72 py-2.5 bg-indigo-500 rounded-badge'>
            {importText}    
            </div>    
            </center> 
        </Layout>
        </>
    )
}