'use-client'

import { Button, PasswordInput, TextInput } from "@mantine/core"

export default function LoginForm(){
    return(
        <div className="max-w-[380px] w-[100%]">
            <p className="text-center font-bold text-2xl">Welcome back!</p>
            <p className="text-center">Please sign in to access your account</p>
            <div className="mt-10 flex flex-col gap-2">
                <TextInput label="Username"/>
                <PasswordInput label="Password"/>
                <Button className="mt-5">Login</Button>
            </div>
        </div>
    )
}