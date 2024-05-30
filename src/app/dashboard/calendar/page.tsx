"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react';

export default function CalendarDemo() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [multipleDays, setMultipleDays] = useState<Date[] | undefined>([])

    const smallDate = date?.toLocaleDateString("es-Es", {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    })


    const smallMultipleDays = multipleDays?.map((date) => date.toLocaleDateString("es-Es", {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    })).join('; ')



    return (
        <div className="flex-col sm:flex-wrap  sm:flex-row gap-4">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
                disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
            />
            <Calendar
                mode="multiple"
                selected={multipleDays}
                onSelect={setMultipleDays}
                className="rounded-md border shadow"
            />
            <div>
                <h1 className="text-3xl">Información</h1>
                <p>{smallDate}</p>
                <p>{smallMultipleDays}</p>
            </div>
        </div>
    )
}
