import Image from 'next/image'
import React, { useState } from 'react';
import EmailInput from '@/components/form/EmailInput';
import PasswordInput from '@/components/form/PasswordInput';
import SubmitButton from '@/components/form/SubmitButton';

export default function Register() {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ response, setResponse ] = useState();
    const [ title, setTitle ] = useState("Create Account");
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials":"true",
            },
            method: 'POST',
            credentials:'include',
            body: JSON.stringify({
                email:email,
                password:password
            })
        });
        const res = await response.json();
        setResponse(res.response);
        setLoading(false);
    }
  return (
    <>
    <center>
    <div className='w-50'>
        <form>
            <EmailInput onChange={(e) => {setEmail(e.target.value)}} />
            <br />
            <PasswordInput onChange={(e) => {setPassword(e.target.value)}} />
            <br />
            <SubmitButton onClick={submit} title={title}/>
        </form>
        {response}
    </div>
    </center>
    </>
  )
}
