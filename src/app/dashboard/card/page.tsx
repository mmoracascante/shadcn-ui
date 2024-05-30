import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function CardWithForm() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

            {
                '1234567'.split('').map(item => (
                    <Card key={item} className="">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button capitalize={true} variant='ghost'>info</Button>
                            <Button capitalize={true}>más</Button>
                        </CardFooter>

                    </Card>
                ))
            }


        </div>
    )
}
