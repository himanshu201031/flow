import SocialAuthForm from '@/components/forms/SocialAuthForm'
import React from 'react'

const SignUp = () => {
    return (
        <div className='mt-10'>
            {/* You can add a specific title here if needed, but layout has "Join DevFlow" */}
            <SocialAuthForm />
        </div>
    )
}

export default SignUp