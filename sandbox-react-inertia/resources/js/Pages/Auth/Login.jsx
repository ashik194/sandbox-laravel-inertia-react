import ParticlesContent from '@/Components/Particles';
import backgroundImage from '../../../../public/bgimaget.jpg';
import { Link, useForm } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';

export default function Login({ status, canResetPassword }) {
    const bgImageStyles = {
        backgroundImage: `url(${backgroundImage})`,
    }
    

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    
    return (
        <>
            <div className='bg-[#F3F3F9] min-h-screen z-20'>

<div className="absolute bg-cover h-[380px] w-full top-0 left-0 z-10" style={bgImageStyles}>

    <div className="absolute bg-gradient-to-r from-[#364574] to-[#405189] opacity-90 w-full h-[380px]">
        <ParticlesContent />
    </div>

    <div className="absolute bottom-0 right-0 left-0 z-0">
        <svg fill='#F3F3F9' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1440 120">
            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
        </svg>
    </div>

</div>

<div className='bg-[#F3F3F9] w-full  absolute top-[380px] right-0 left-0 z-20'></div>

<div className="relative z-30">

    <div className="mt-24 mb-6">
        <div className="text-center mt-sm-5 mb-4 text-white-50">
            <div>
                <div className="d-inline-block auth-logo">
                    <p className='text-2xl font-extrabold text-white'>SANDBOX</p>
                </div>
            </div>
            <p className="text-base font-medium text-[#ffffff80]">Lorem ipsum dolor sit amet</p>
        </div>
    </div>

    <div className="flex justify-center p-4 mb-2">
        <div className="max-w-md rounded bg-white flex min-h-full flex-1 flex-col justify-center p-6 lg:p-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h5 className="text-center text-base font-medium leading-5 tracking-wide text-[#405189]">
                    Welcome Back !
                </h5>
                <p className="text-center text-sm font-normal leading-9 tracking-normal text-[#878A99]">
                    Sign in to continue to Sandbox.
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                
                <form className="space-y-6" onSubmit={submit} >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium  text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={data.email}
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Enter username"
                                className="block w-full rounded-md border-1 py-2 text-gray-700 border-gray-300 placeholder:text-xs placeholder:font-medium placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium  text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-gray-500  hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Enter password"
                                required
                                className="block w-full rounded-md border-1 py-2 text-gray-700 border-gray-300 placeholder:text-xs placeholder:font-medium placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-500 font-bold" for="remember">
                            <input className="rounded mr-2 focus:ring-0" type="checkbox" id="remember" name="remember" />
                            <span className="text-sm font-medium">
                                Remember me
                            </span>
                        </label>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex w-full justify-center rounded-md bg-[#0ab39c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#099885] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>

    <div>
        <p className="text-center text-xs font-normal text-black leading-4">
            Don't have an account ?{' '}
            <Link href={route('register')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Signup
            </Link>
        </p>
    </div>

    <div className='text-center py-5 text-xs font-normal text-[#878a99]'>© 2024 Sandbox. Developed by Orange Business Development Ltd.</div>

</div>

</div>
        </>
    )
}



