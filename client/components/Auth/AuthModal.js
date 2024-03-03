import { useSession, signIn, signOut } from "next-auth/react"
import { GoogleSVG } from "./GoogleSVG";
import { GithubSVG } from "./GithubSVG";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function AuthModal() {
    const signUserIn = () => {
        signIn("google");
    }
    return (
        <>
        <div className="bg-white border border-white/10 rounded-lg">
            <br/>
            <center>
                  <h1 className="-mt-1 font-bold text-xl text-black">Please sign in</h1>
                  <button className='mt-4 outline-none w-4/5 py-2 bg-zinc-950 text-white rounded-lg font-medium flex justify-center items-center gap-2 duration-300' onClick={signUserIn}>
                  <GoogleSVG className=''/>
                  Continue with Google</button>
                  <br />
                  </center>
        </div>
        </>
    //     <Card className='border-white/10 dark:border-black/10'>
    //     <CardHeader className="space-y-1">
    //       <CardTitle className="text-2xl text-left">Please sign in</CardTitle>
    //       <CardDescription className='text-left'>
    //         To access astralics, you have to be authenticated
    //       </CardDescription>
    //     </CardHeader>
    //     <CardContent className="grid gap-4">
    //       <div className="grid grid-cols-2 gap-6">
    //         <Button variant="outline" className='dark:bg-zinc-950 !border-white/10'>
    //           Github
    //         </Button>
    //         <Button variant="outline" className='dark:bg-zinc-950 !border-white/10'>
    //           Google
    //         </Button>
    //       </div>
    //       <div className="grid gap-2 text-left">
    //         <Label htmlFor="email">Email</Label>
    //         <Input id="email" type="email" placeholder="m@example.com" />
    //       </div>
    //     </CardContent>
    //     <CardFooter>
    //       <Button className="w-full">Login with Email</Button>
    //     </CardFooter>
    //   </Card>
    )
}