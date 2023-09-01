import Layout from "@/components/layout"
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, CheckIcon, ClipboardDocumentListIcon } from "@heroicons/react/20/solid"
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
            <div className='w-72 py-2.5 backgroundColor widgetShadow rounded-lg'>
            <p className="font-medium flex justify-center gap-x-3 drop-shadow-md">npm i blitzpackage@latest
            <span className='w-8 h-6 bg-gray-700 rounded-md flex justify-center items-center'>
            {
                npmCopy 
                ? <><CheckIcon className='flex cursor-pointer' width={20}  height={20} /></>
                : <><ClipboardDocumentListIcon onClick={copyNPM} className='flex cursor-pointer' width={20}  height={20}/></>
            } 
            </span>
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