import { RiDashboard2Line } from "react-icons/ri";
import logo from "../../../../public/logo-sm.png"
import { Link } from '@inertiajs/react';

export default function SidebarIconB({ toggleValue }) {
  const currentUrl = window.location.pathname;
  const lastPortion = currentUrl.split('/').pop();
  //console.log(lastPortion);
 
  return (
    <div className='bg-[#f3f3f9] w-[70px] shadow-[rgba(15,_34,_58,_0.22)_0px_2px_2px] min-h-screen'>
      <div class="flex flex-col items-center pt-6 sticky top-0 left-0">
        <Link href={route('admin.dashboard')} className='mb-6'>
          <img src={logo} alt="" height={22} width={22}/>
        </Link>

        <div className='hover:cursor-pointer flex flex-col gap-3'>

          <Link className={
            lastPortion==='admin-dashboard'? 'h-10 w-10 bg-[rgba(64,_81,_137,_0.15)] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='dashboard'
            href={route('admin.dashboard')}>
              <RiDashboard2Line style={{ color: '#6D7080' }} size={20} />
            {/* {
                lastPortion === 'admin-dashboard' ? (
                  <RiDashboard2Line style={{ color: '#25a0e2' }} size={20} />
                ) : (
                  <RiDashboard2Line style={{ color: '#6D7080' }} size={20} />
                )
              } */}
          </Link>


        </div>

      </div>
      
    </div>
  )
}
