"use client"
import { AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "@radix-ui/react-alert-dialog"
import { useState } from "react"





export default function AlertDialogDemo() {
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <AlertDialog
            open={dialogOpen}
        >
            <AlertDialogTrigger asChild>
                <Button
                    onClick={() => setDialogOpen(!dialogOpen)}
                    variant="outline"
                >Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => console.log('Cancelando')}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => console.log('Continuando')}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
