import React from 'react'
import MainLogo from '../../../../public/mainLogo.png'

export default function SidebarSubMenuB({ toggleValue }) {

  const currentUrl = window.location.pathname;
  const lastPortion = currentUrl.split('/').pop();
  //console.log(lastPortion);

  let message = null;
  if (lastPortion === 'admin') {
    message = ["Admin"];
  }

  return (
    <div className={toggleValue ? 'bg-[#f6f8fa] w-[220px] min-h-screen block' : 'bg-[#f6f8fa] w-[220px] min-h-screen hidden'}>

      <div className="px-5 flex flex-col justify-center items-center min-h-[70px] sticky top-0">
        <span className="">
        <img src={MainLogo} alt="" height={17} width={99}/>
        </span>
      </div>

      <div className='pl-7 flex flex-col text-[#7c7f90] text-sm cursor-pointer fixed'>
        {
          message.map((items, index) => (
            <span key={index} className='flex flex-row items-center hover:text-[#25a0e2]'>
              <p>-</p>
              <p className='pl-6 py-2'>{items}</p>
            </span>
          ))
        }
      </div>

    </div>

  )
} 