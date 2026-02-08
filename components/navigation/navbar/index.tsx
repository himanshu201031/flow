import Link from 'next/link'
import Image from 'next/image'
import { Theme } from '../Theme'
import { auth, signOut } from "@/auth"
import ROUTES from "@/constants/routes"
import { Button } from "@/components/ui/button"

const Navbar = async () => {
    const session = await auth();
    return (
        <nav className='flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 dark:shadow-none sm:px-12'>
            <Link href="/" className="flex items-center gap-1">
                <Image src="/images/site-logo.svg" height={23} width={23} alt="devflow logo" />
                <p className='h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden'>
                    Dev <span className='text-primary-500'>Flow</span>
                </p>
            </Link>

            <p>Global Search</p>

            <div className='flex-between gap-5'>
                <Theme />
                {session?.user ? (
                    <form action={async () => {
                        "use server"
                        await signOut()
                    }}>
                        <Button type="submit" className="text-red-500">Log Out</Button>
                    </form>
                ) : (
                    <div className="flex gap-3">
                        <Link href={ROUTES.SIGN_IN}>
                            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                                <span className="primary-text-gradient">Log In</span>
                            </Button>
                        </Link>
                        <Link href={ROUTES.SIGN_UP}>
                            <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none'>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar