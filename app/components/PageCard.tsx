import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

export function PageCard (props:any) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
        </Card>
    )
}