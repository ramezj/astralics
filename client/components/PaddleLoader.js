import Script from "next/script";

export function PaddleLoader() {
    return (
        <Script src="https://cdn.paddle.com/paddle/paddle.js"
        onLoad={() => {
            
            Paddle.Environment.set("sandbox");
            Paddle.Setup({
                vendor: Number(process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID)
            })
        }}
        />
    )
}
// import { initializePaddle, InitializePaddleOptions, Paddle } from "@paddle/paddle-js";
// import { useEffect, useState } from 'react';

// export default function usePaddle() {
//     const [ paddle, setPaddle ] = useState();
//     useEffect(() => {
//         initializePaddle({
//             environment:process.env.PADDLE_ENV,
//             token:process.env.PADDLE_CLIENT_TOKEN,
//             seller:process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID
//         })
//     })
// }