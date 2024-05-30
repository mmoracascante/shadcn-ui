'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Autoplay
} from "@/components/ui/carousel"

export default function CarouselDemo() {
    return (
        <div className="w-full flex justify-center">
            <Carousel className="w-full max-w-xs"
                autoplay={800}
                opts={{
                    loop: true
                }}
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex justify-center items-center" />
                <CarouselNext className="hidden sm:flex justify-center items-center" />
            </Carousel>
        </div>
    )
}
