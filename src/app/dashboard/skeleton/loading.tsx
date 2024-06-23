import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default async function loading() {

    const data = '123456'.split('');
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                data.map((item) => (
                    <Card key={item}>
                        <CardHeader className="flex-row">
                            <Skeleton


                                className="rounded-full mr-2 w-10 h10"
                            />
                            <div className='flex-col flex-grow'>
                                <Skeleton className='h-4 w-1/2 mb-2' />
                                <Skeleton className='h-2 w-full' />
                            </div>
                        </CardHeader>
                        <CardFooter className="flex justify-end">
                            <Skeleton className='h-8 w-20' />
                        </CardFooter>
                    </Card>
                ))
            }





        </div>
        // <Skeleton className="w-[100px] h-[20px] rounded-full" />
    )
}
