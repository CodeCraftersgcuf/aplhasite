'use client'

import React, { useEffect, useState } from 'react'
import AuthInputButton from '@/components/auth-input-subcomponents/AuthInputButton'
import CustomAuthInput from '@/components/auth-input-subcomponents/CustomAuthInput'
import WithHeaderWrapper from '@/components/WithHeaderWrapper'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { isEmail, isEqualsToOtherValue, isNotEmpty, isPasswordValid } from '@/helpers/validationsFuncitons'
import ViewPasswordIco from '@/components/auth-input-subcomponents/ViewPasswordIco'
import usePost from '@/hooks/usePost'
import { stateActions } from '@/store/slices/currentState'
import { useDispatch } from 'react-redux'
import '@/app/styles/spinner.scss'

const SignInPage = () => {
    const dispatch = useDispatch()
    const { isLoading, isError, isSuccess, postData } = usePost()
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()
    const data = useSelector((state) => state.authInputFn.signIn)
    const handleNavigateSignup = () => {
        router.push('/sign-up')
    }
    const hanldeSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        if (data.email.trim() === '' || data.password.trim() === '') {
            return
        }
        postData({ url: 'http://localhost:3000/api/login', data: data })
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(stateActions.userLogin())
            router.push('/')
        }
    }, [isSuccess])

    return (
        <WithHeaderWrapper>
            <div
                className="h-screen max-w-[100%] flex items-center justify-center bg-white "
            // onClick={handleOutsideClick}
            >
                <div className="bg-white flex flex-col gap-3 rounded-lg w-full max-w-lg mx-4 sm:mx-0 p-6">
                    <div className='flex items-center justify-center'>
                        <h2 className="text-xl text-black font-bold">SIGN IN</h2>

                    </div>
                    <form
                        onSubmit={hanldeSubmit}
                        className="flex flex-col gap-2">
                        <CustomAuthInput
                            validFn={(value) => !isNotEmpty(value) || !isEmail(value)}
                            id='email'
                            type="email"
                            placeholder='liam@acme.com'
                            error={'Enter a valid email'}
                            childType={'signIn'}
                        />

                        <div className='w-full h-[1px] bg-gray-300'></div>

                        <CustomAuthInput
                            validFn={() => false}
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='password'
                            error={'Password must contain atleast 8 digits'}
                            childType={'signIn'}
                        >
                            <ViewPasswordIco
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                            />
                        </CustomAuthInput>

                        <div className='w-full h-[1px] bg-gray-300'></div>

                        <AuthInputButton>
                            {isLoading ? <span className="small-loader"></span> : 'Sign In'}
                        </AuthInputButton>
                    </form>
                    <div className="flex justify-center text-xs mt-2">
                        <span className='text-gray-500 mx-1'>New to Pang3a UK?</span>
                        <button
                            className='text-gray-800 mx-1 hover-line'
                            onClick={handleNavigateSignup}
                        >Create An Account</button>
                    </div>
                </div>
            </div>
        </WithHeaderWrapper>
    )
}


export default SignInPage
