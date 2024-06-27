"use client"

import { Badge } from "@/components/ui/badge"
import { Payment } from "@/data/payments.data"
import { ColumnDef, FilterFn, Row, SortDirection, filterFns } from "@tanstack/react-table"


import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, ChevronUpIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { toast } from "sonner"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.




const myCustomFilterFn: FilterFn<Payment> = (row: Row<Payment>, columnId: string, filterValue: string, addMeta: (meta: any) => void) => {

    filterValue = filterValue.toLowerCase()
    const filterParts = filterValue.split(' ')


    // for (const key in row.original) {
    //     console.log('column222222', key)
    // }

    // for (const part of filterParts) {

    //     if (row.original.email.includes(part)) {
    //         return true
    //     }
    //     if (row.original.status.includes(part)) {
    //         return true
    //     }
    //     if (row.original.clientName.includes(part)) {
    //         return true
    //     }
    // }
    for (const part of filterParts) {
        for (const key in row.original) {
            if (row.original.hasOwnProperty(key) && key !== 'id' && key !== 'amount') {
                console.log('222222222232131321', row.original.hasOwnProperty(key))
                const value = row.original[key as keyof Payment];
                console.log('23123122', value)

                if (typeof value === 'string' && value.toLowerCase().includes(part)) {
                    return true;
                }
            }
        }
    }



    return false
}





const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
    if (isSorted === 'asc') {
        return <ChevronUpIcon />
    }

    if (isSorted === 'desc') {
        return <ChevronDownIcon />
    }

    return null

}



export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "clientName",
        header: ({ column }) => {
            return (
                <Button
                    className="w-full flex justify-between pl-0"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Client name
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },


    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    className="w-full flex justify-between pl-0"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },

        cell: ({ row }) => {
            const status = row.getValue('status') as string
            const variant = {
                pending: 'secondary',
                processing: 'info',
                success: 'success',
                failed: 'destructive'
            }[status] ?? ('default' as any)
            return <Badge
                variant={variant}
                capitalize

            >{status}</Badge>
        }
    },

    {
        accessorKey: "amount",

        header: ({ column }) => {
            return (
                <Button
                    className="w-full flex justify-between pl-0"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Amount
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div >{formatted}</div>
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    className="w-full flex justify-between pl-0"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },
        filterFn: myCustomFilterFn
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => {
                                navigator.clipboard.writeText(payment.id)
                                toast.success('Payment ID copied to clipboard', {
                                    position: 'top-right',
                                })
                            }}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
