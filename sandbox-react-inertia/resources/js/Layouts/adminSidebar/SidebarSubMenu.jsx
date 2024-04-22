import MainLogo from '../../../../public/mainLogo.png'
import sidebarMenuData from '../../../data/sidebarMenuData.json'

function SidebarSubMenu({ toggleValue, selected }) {

  let message = null;

  if (selected === 'dashboard') {
    message = sidebarMenuData.dashboard;
  } else if (selected === 'app') {
    message = sidebarMenuData.app;
  } else if (selected === 'layout') {
    message = sidebarMenuData.layout;
  }

  return (
    <div className={toggleValue ? 'bg-[#f6f8fa] w-[220px] min-h-screen block' : 'bg-[#f6f8fa] w-[220px] min-h-screen hidden'}>

      <div className="px-5 flex flex-col justify-center items-center min-h-[70px]">
        <span className="">
          <img src={MainLogo} alt="" height={17} width={99}/>
        </span>
      </div>

      <div className='pl-7 flex flex-col text-[#7c7f90] text-sm cursor-pointer'>
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

export default SidebarSubMenu