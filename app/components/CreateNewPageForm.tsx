"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Loader2 } from "lucide-react"
import { CreatePage } from "@/actions/page/CreatePage";

export function CreateNewPageForm() {
  const [ name, setName ] = useState<string>('');
  const [ handle, setHandle ] = useState<string>('');
  const [ website, setWebsite ] = useState<string>('');
  const [ loading, setLoading ] = useState<boolean>(false);
  const CreateNewPage = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    const res = await CreatePage(name, handle, website);
    if(res.error) {
      console.error(res.error);
    } else {
      console.log(res.page);
    }
    setLoading(false);
  }
    return (
        <Card className="border-none">
        <CardHeader>
          <CardTitle>Create Feedback Page</CardTitle>
          <CardDescription>
            All settings are changeable later.
          </CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 w-full" onSubmit={CreateNewPage}>
              <Label>Name</Label>
              <Input placeholder='astralics' className='w-full md:w-1/2' required value={name} onChange={((e) => {setName(e.target.value)})}/>
              <Label>Handle</Label>
              <Input placeholder='astralics.com/' className='w-full md:w-1/2' required value={handle} onChange={((e) => {setHandle(e.target.value)})}/>
              <Label>Website URL</Label>
              <Input placeholder='https://astralics.com' className='w-full md:w-1/2' required value={website} onChange={((e) => {setWebsite(e.target.value)})}/>
              {
                loading
                ? 
                <>
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Crete Page
                  </Button>
                </>
                : 
                <>
                  <Button className="w-full md:w-1/2">Create Page</Button>
                </>
              }
          </form>
        </CardContent>
      </Card>
    )
}