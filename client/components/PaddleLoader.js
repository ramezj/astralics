import Script from "next/script";

export function PaddleLoader() {
    return (
        <Script src="https://cdn.paddle.com/paddle/paddle.js"
        onLoad={() => {
            Paddle.Environment.set("sandbox");
            Paddle.Setup({
                vendor:168889
            })
        }}
        />
    )
}