'use client'
import React, { useState, useEffect } from 'react'
import AuthInputButton from '@/components/auth-input-subcomponents/AuthInputButton'
import CustomAuthInput from '@/components/auth-input-subcomponents/CustomAuthInput'
import WithHeaderWrapper from '@/components/WithHeaderWrapper'
import { useRouter } from 'next/navigation'
import { isEmail, isEqualsToOtherValue, isNotEmpty, isPasswordValid } from '@/helpers/validationsFuncitons'
import { useSelector } from 'react-redux'
import ViewPasswordIco from '@/components/auth-input-subcomponents/ViewPasswordIco'
import usePost from '@/hooks/usePost'
import { useDispatch } from 'react-redux'
import { stateActions } from '@/store/slices/currentState'
import '@/app/styles/spinner.scss'

const SignUpPage = () => {
    const dispatch = useDispatch()
    const { isLoading, isError, isSuccess, postData } = usePost()
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()
    const data = useSelector((state) => state.authInputFn.signUp)
    const handleNavigateSignup = () => {
        router.push('/sign-in')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        if (data.email.trim() === '' || data.password.trim() === '') {
            return
        }
        postData({ url: 'http://localhost:3000/api/signup', data: data })
    }

    useEffect(() => {
        if (isSuccess) {
            // dispatch(stateActions.userLogin())
            router.push('/sign-in')
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
                        <h2 className="text-xl text-black font-bold">REGISTER</h2>

                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-2">

                        <CustomAuthInput
                            validFn={(value) => !isNotEmpty(value)}
                            id='firstName'
                            type="text"
                            placeholder='first name'
                            error={'First Name should not be empty'}
                            childType={'signUp'}
                        />

                        <div className='w-full h-[1px] bg-gray-300'></div>

                        <CustomAuthInput
                            validFn={(value) => !isNotEmpty(value)}
                            id='lastName'
                            type="text"
                            placeholder='last name'
                            error={'Last Name should not be empty'}
                            childType={'signUp'}
                        />

                        <div className='w-full h-[1px] bg-gray-300'></div>

                        <CustomAuthInput
                            validFn={(value) => !isNotEmpty(value)}
                            id='email'
                            type="email"
                            placeholder='liam@acme.com'
                            error={'Enter a valid email'}
                            childType={'signUp'}
                        />

                        <div className='w-full h-[1px] bg-gray-300'></div>

                        <CustomAuthInput
                            validFn={(value) => !isNotEmpty(value) || !isPasswordValid(value)}
                            id='password'
                            type="password"
                            placeholder='password'
                            error={'Password must contain atleast 8 digits'}
                            childType={'signUp'}
                        >
                            <ViewPasswordIco
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                            />
                        </CustomAuthInput>

                        <div className='w-full h-[1px] bg-gray-300'></div>

                        <AuthInputButton>
                            {isLoading ? <span className="small-loader"></span> : 'Sign Up'}
                        </AuthInputButton>
                    </form>
                    <div className="flex justify-center text-xs mt-2">
                        <span className='text-gray-500 mx-1'>Already have an account?</span>
                        <button
                            className='text-gray-800 mx-1 hover-line'
                            onClick={handleNavigateSignup}
                        >Sign In</button>
                    </div>
                </div>
            </div>
        </WithHeaderWrapper>
    )
}

export default SignUpPage
