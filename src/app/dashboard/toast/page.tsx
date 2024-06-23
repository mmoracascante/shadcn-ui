'use client'
import { Button } from "@/components/ui/button"
import { toast, useToast } from "@/components/ui/use-toast"



export default function CardWithForm() {
    const { toast } = useToast()



    return (
        <div className="grid grid-cols-2 gap-2">
            <Button
                onClick={() => {
                    toast({
                        variant: 'success',
                        title: "Scheduled: Catch up",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                    })
                }}
            >
                Show Toast
            </Button>
        </div>


    )
}
