import Link from "next/link";
import { Metadata } from "next"
import { Separator } from "@/components/ui/separator" 
import { GoogleSignIn } from "@/components/GoogleSignIn";
import { GithubSignIn } from "@/components/GithubSignIn";

export const metadata: Metadata = {
  title: "Astralics | Authentication",
  description: "Generated by create next app",
};


export default function Page() {
    return (
      <div className="flex items-center justify-center py-48">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">login to astralics</h1>
          </div>
          <div className="grid gap-4">
            <div className="-mt-1">
              <Separator />
            </div>
                <GoogleSignIn />
                <GithubSignIn />
          </div>
        </div>
      </div>
    );
  }
  