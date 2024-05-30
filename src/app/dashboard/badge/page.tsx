import { Badge } from "@/components/ui/badge"

export default function BadgeDemo() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <Badge>Badge</Badge>
            <Badge variant='destructive'>destructive</Badge>
            <Badge variant='secondary'>secondary</Badge>
            <Badge variant='outline'>outline</Badge>
            <Badge capitalize={true} variant='success'>success</Badge>
            <Badge capitalize={true} variant='info'>info</Badge>

        </div>
    )
}
