
import { Link } from '@inertiajs/react';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import man from "../../../public/man.jpg";
import { useState } from 'react';

function Header(props) {
    const [toggle, setToggle] = useState(false)
    const menuToggle = () => {
        setToggle(!toggle)
        props.handleToggleValue(toggle)
    }
    const [userDetails, setUserDetails] = useState(false)
    const userInfo = () => {
        setUserDetails(!userDetails)
    }
  return (
    <>
    
<header className="flex justify-between items-center px-5 gap-4 border-b-2 h-16 sticky top-0 right-0   bg-white">

{/* <Link className='logo-box' href='index.html'>
    <img src="assets/images/logo-sm.png" className="h-6" alt="Small logo" />
</Link> */}
<div>
<button  onClick={menuToggle} className="hidden sm:block nav-link p-2 waves-effect me-auto">
    <span className="sr-only">Menu Toggle Button</span>
    <span className="flex items-center justify-center h-6 w-6">
        {/* <i className="ph ph-list text-2xl"></i> */}
        <HiMiniBars3BottomLeft className='text-2xl' />
    </span>
</button>
</div>
{/* <div className="md:flex hidden items-center relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <i className="ph ph-magnifying-glass text-base"></i>
    </div>
    <input type="search" className="form-input px-8 rounded-full  bg-gray-500/10 border-transparent focus:border-transparent" placeholder="Search..."/>
    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
        <i className="ph ph-microphone text-base hover:text-black"></i>
    </button>
</div>

<div className="relative">
    <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button" className="nav-link p-2 waves-effect fc-dropdown">
        <span className="flex items-center justify-center h-6 w-6">
            <img src="assets/images/flags/us.jpg" alt="flags img" className="h-4 w-6" />
        </span>
    </button>
    <div className="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-40 z-50 mt-3 transition-[margin,opacity] duration-300 bg-white shadow-lg border border-gray-200 rounded-lg p-2">
        <a href="javascript:void(0);" className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100" >
            <img src="assets/images/flags/germany.jpg" alt="flags img" className="h-4" />
            <span className="align-middle">German</span>
        </a>
        <a href="javascript:void(0);" className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100">
            <img src="assets/images/flags/italy.jpg" alt="flags img" className="h-4" />
            <span className="align-middle">Italian</span>
        </a>
        <a href="javascript:void(0);" className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100">
            <img src="assets/images/flags/spain.jpg" alt="flags img" className="h-4" />
            <span className="align-middle">Spanish</span>
        </a>
        <a href="javascript:void(0);" className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100">
            <img src="assets/images/flags/russia.jpg" alt="flags img" className="h-4" />
            <span className="align-middle">Russian</span>
        </a>
    </div>
</div>

<div className="md:flex hidden">
    <button data-toggle="fullscreen" type="button" className="nav-link p-2 waves-effect">
        <span className="sr-only">Fullscreen Mode</span>
        <span className="flex items-center justify-center h-6 w-6">
            <i className="ph ph-arrows-out text-2xl"></i>
        </span>
    </button>
</div> */}

<div className="relative">
    <button data-fc-type="dropdown" data-fc-placement="bottom-end" onClick={userInfo} type="button" className="nav-link flex items-center gap-2.5 waves-effect p-2">
        <img src={man} alt="user-image" className="rounded-full h-8 w-8"/>
        <span className="md:flex items-center hidden">
            <span className="font-medium text-base">Jamie</span>
            <i className='ph ph-chevron-down'></i>
        </span>
    </button>
    <div className={`${userDetails?'block':'hidden'} absolute  w-32 z-50 transition-[margin,opacity] duration-300 mt-2 bg-[#405189] shadow-lg border rounded-lg p-2`}>
        {/* <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-800" href="#">
            Inbox
        </a>
        <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-800" href="#">
            Profile
        </a>
        <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-800" href="#">
            Settings
        </a>
        <a className="flex items-center py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-800" href="#">
            Lock Account
        </a> */}
        <Link className="flex items-center py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-800" href="#">
            Log Out
        </Link>
    </div>
</div>
</header>
        
</>
  )
}

export default Header