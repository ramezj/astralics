import Layout from "@/components/layout"
import { Separator } from "@/components/ui/separator"

export default function Custom404() {
    return (
        <>
        <Layout>
        <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">404</h2>
          <p className="text-muted-foreground">
            Something went completely wrong, on our end.
          </p>
        </div>
        <Separator className="my-6" />
        </div>
        </Layout>
        </>
    )
}