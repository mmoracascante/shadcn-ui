'use client'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { FormEvent, useState } from "react"

export default function CommandDemo() {
    const [input, setInput] = useState('')



    const handleChange = (value: string) => {
        setInput(value)
    }


    return (
        <div className="flex flex-col justify-center items-center h-[250px]">
            <InputOTP
                onChange={handleChange}
                value={input}
                maxLength={8}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                </InputOTPGroup>

                <InputOTPSeparator />

                <InputOTPGroup>
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                </InputOTPGroup>

                <InputOTPSeparator />

                <InputOTPGroup>
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>

                <InputOTPSeparator />

                <InputOTPGroup>
                    <InputOTPSlot index={6} />
                    <InputOTPSlot index={7} />
                </InputOTPGroup>
            </InputOTP>
            <div className="mt-5">
                {input}
            </div>
        </div>
    )
}
