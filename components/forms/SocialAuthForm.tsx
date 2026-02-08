"use client"

import { signIn } from 'next-auth/react'
import ROUTES from '@/constants/routes'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { toast } from "sonner"
const SocialAuthForm = () => {
    const button = "background-light900_dark300 body-medium text-dark200_light800 min-h-12 flex-1 rounded-lg px-4 py-3 border light-border shadow-none hover:shadow-md transition-all"

    const handleSignIn = async (provider: "github" | "google") => {
        try {
            await signIn(provider, {
                callbackUrl: ROUTES.HOME,
                redirect: true,
            });

        } catch (error) {
            console.log(error);
            toast("Error", {
                description: error instanceof Error ? error.message : "An error occured during sign-in",


            })

        }

    }
    return (
        <div className=' mt-10 flex flex-wrap gap-2.5'>
            <Button className={button} onClick={() => handleSignIn("github")}>
                <Image src="/icons/github.svg" alt="github" width={20} height={20} className=' invert-colors mr-2.5 object-contain' />
                <p className='paragraph-medium'>Continue with Github</p>
            </Button>

            <Button className={button} onClick={() => handleSignIn("google")}>
                <Image src="/icons/google.svg" alt="google" width={20} height={20} className=' invert-colors mr-2.5 object-contain' />
                <p className='paragraph-medium'>Continue with Google</p>
            </Button>

        </div>
    )
}

export default SocialAuthForm