import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"

export function PageCard (props:any) {
    return (
        <Card className="w-[250px]">
            <CardHeader className="">
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent>
            </CardContent>
        </Card>
    )
}