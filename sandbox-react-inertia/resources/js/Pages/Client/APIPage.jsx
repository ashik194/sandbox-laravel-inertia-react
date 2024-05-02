import ClientLayout from '@/Layouts/ClientLayout';
import React, { useState } from 'react'
import mygovDashboard from "../../../../public/mygov-dashboardpng.png";

function ApiPage() {
    const [keyName, setKeyName] = useState('')
    const handleKeyName = (e) => {
        setKeyName(e.target.value.replaceAll(' ', ''));

        
    }
  return (
    <>
    <ClientLayout>
    <div className='px-4 py-2 bg-white'>
        <h4 className='text-[15px] font-semibold uppercase'>Clients</h4>
    </div>
        <div className='mx-8 my-4'>
            <div className='flex justify-between items-center'>
            <div
                className="flex-1 block rounded-lg bg-white shadow-[rgba(56,_65,_74,_0.15)_0px_1px_2px] dark:bg-surface-dark dark:text-white text-surface border  max-w-3xl">
                <div
                    className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                    API
                </div>
                <div className="p-6">
                    <form>
                        <div className='w-full '>
                        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                            <div className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label 
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Name
                                </label> 
                                <input 
                                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" 
                                    type="text" 
                                    placeholder="Enter your Name"
                                    name="name"
                                    
                                />
                            </div>

                            <div className="w-full mt-4 px-3">
                                <label 
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Email
                                </label>
                                <input 
                                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" 
                                    type="email" 
                                    placeholder="Enter your email"
                                    name='email'
                                    
                                />
                            </div>
                        {/* </div> */}

                        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                            <div className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label 
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Key Name
                                </label> 
                                <input 
                                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" 
                                    type="text" 
                                    placeholder="Key Name"
                                    name="key_name"
                                    value={keyName || ""}
                                    onChange={handleKeyName}
                                />
                            </div>
                            <div className="w-full mt-4 px-3">
                                <label 
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Project URI
                                </label>
                                <input 
                                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" 
                                    type="text" 
                                    placeholder="Project URI"
                                    name="project_uri"
                                    
                                />
                            </div>
                        {/* </div>  */}
                        

                        </div>
                        <div className='mt-4 mx-4'>
                            <button className='text-white bg-[#405189] border border-[#405189] hover:text-white hover:bg-[#364574] hover:border-[#33416e] px-4 py-2 rounded-md'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='flex-1 md:flex items-center justify-center hidden'>
                <img src={mygovDashboard} className='max-w-2xl' alt=''/>
            </div>

            </div>
        </div>
        </ClientLayout>
    </>
  )
}

export default ApiPage