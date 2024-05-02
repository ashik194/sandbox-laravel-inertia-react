import React, { useState } from 'react'
import {IoMdAddCircleOutline} from 'react-icons/io';
import { LuRefreshCcw } from "react-icons/lu";
import { CgRemove } from "react-icons/cg";
import LogoUp from '@/Components/Logo';
import ClientLayout from '@/Layouts/ClientLayout';
import mygovDashboard from "../../../../public/mygov-dashboardpng.png";

export default function SSOPage() {
    
    const [url,setUrl]=useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [redirectUri, setRedirectUri] = useState([{redirect_uri: ""}])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [refreshText, setRefreshText] = useState("");

    const [values, setValues] = useState({
        name: null,
        email: null,
        client_id: null
    });

    const handleChange = (e) => {
        setValues(values => ({
            ...values, 
            [e.target.id] : e.target.value
        }))
    }

    const ssoSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    const handleRefreshText = () => {
          const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
              let result = ' ';
            const charactersLength = characters.length;
            for( let i = 0; i < 30; i++ ){
                result += characters.charAt(Math.floor(Math.random() * charactersLength))
            }
            setRefreshText(result);   
    }
    const handleRedirect = (e, index) => {
        const { name, value } = e.target;
        const list = [...redirectUri];
        list[index][name] = value;
        setRedirectUri(list);
      };

    const redirectAdd = () => {
        setRedirectUri([...redirectUri, { redirect_uri: "" }]);
    };
    const redirectRemove = (index) => {
        const list = [...redirectUri];
        list.splice(index, 1);
        setRedirectUri(list);
      };

  return (
    <>
    <ClientLayout>
    <div className='px-4 py-2 bg-white border-b border-b-[rgba(15,_34,_58,_0.22)_0px_2px_2px]'>
        <h4 className='text-[15px] font-bold uppercase '>Clients</h4>
    </div>
        <div className='mx-8 my-4'>
            <div className='flex justify-between items-center'>
            <div
                className="flex-1 block rounded-md shadow-[rgba(56,_65,_74,_0.15)_0px_1px_2px] bg-white dark:bg-surface-dark dark:text-white text-surface  max-w-3xl">
                <div
                    className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                    SSO
                </div>
                <div className="p-6">
                    <form onSubmit={ssoSubmit}>
                        <div className='w-full '>
                        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                            <div className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-first-name">
                                    Name
                                </label>
                                <input 
                                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                id='name'
                                value={values.name}
                                onChange={handleChange}
                                
                                placeholder="Enter your Name"/>
                            </div>

                            <div className="w-full mt-4 px-3">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-last-name">
                                    Email
                                </label>
                                <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="email"
                                name=""
                                id='email'
                                value={values.email}
                                onChange={handleChange}
                                
                                placeholder="Enter your email"/>
                            </div>
                        {/* </div> */}

                        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                            <div className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-first-name">
                                    Client ID
                                </label>
                                
                                <input className="appearance-none block w-full  text-gray-700 border bg-gray-100 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500" 
                                type="text"
                                name=""
                                
                                placeholder="Client ID" readOnly/>
                                </div>

                                <div className="w-full mt-4 px-3">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-last-name">
                                    Client Secret
                                </label>
                                <div className='flex'>
                                    <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    type="text"
                                    name=""
                                    value={refreshText}
                                    placeholder="Client Secret" readOnly/>
                                    <button onClick={handleRefreshText} className="flex-shrink-0 bg-[#212529] hover:bg-[#424649] border-[#212529] hover:border-[#373b3e] text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    {/* Refresh */}
                                    <LuRefreshCcw className='text-2xl' />
                                    </button>
                                </div>
                            </div>
                        {/* </div> */}

                        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                            <div className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-first-name">
                                Post logout URI
                                </label> 
                                <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                
                                placeholder="Enter Post logout URI"/>
                            </div>

                            <div className="w-full mt-4 px-3">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-last-name">
                                    Policy URI
                                </label>
                                <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                
                                placeholder="Enter Policy URI"/>
                            </div>
                        {/* </div> */}

                        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                            <div className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-first-name">
                                Initial Login URI
                                </label> 
                                <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                
                                placeholder="Enter Initial Login URI"/>
                            </div>

                            {/* <div className="w-full mt-4 px-3">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-last-name">
                                Logo
                                </label>
                                <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="file"
                                name=""
                                
                                placeholder="Logo"/>
                            </div> */}
                        {/* </div> */}

                        {/* <div className="flex flex-wrap mt-4 mx-2 mb-6"> */}
                        {redirectUri.map((uri, index) => (
                            <div key={index} className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-first-name">
                                    Redirect URI
                                </label>
                                <div className='flex'>
                                    <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    type="text"
                                    name=""
                                    
                                    placeholder="Redirect URI"/>
                                    {redirectUri.length - 1 !== index && redirectUri.length > 0 && (
                                        <button onClick={redirectRemove} className="flex-shrink-0 bg-[#f06548] hover:bg-[#cc563d] border-[#f06548] hover:border-[#cc563d] text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                        {/* Add More */}
                                            <CgRemove className='text-2xl' />
                                        </button>
                                    )}
                                    {redirectUri.length - 1 === index && redirectUri.length < 3 && (
                                        <button onClick={redirectAdd} className="flex-shrink-0 bg-[#212529] hover:bg-[#424649] border-[#212529] hover:border-[#373b3e] text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                        {/* Add More */}
                                            <IoMdAddCircleOutline className='text-2xl' />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        {/* </div> */}

                         <LogoUp />

                        </div>
                        <div className='mx-4 mt-4'>
                            <button className='text-white bg-[#405189] border border-[#405189] hover:text-white hover:bg-[#364574] hover:border-[#33416e] px-4 py-2 rounded-md'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            


            <div className='flex-1 md:flex items-center justify-center hidden'>
                <img src={mygovDashboard} className='max-w-2xl' alt='' />
            </div>
            </div>
        </div>
        </ClientLayout>
    </>
  )
}
