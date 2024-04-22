import { RiDashboard2Line } from "react-icons/ri";
import { RiApps2Line } from "react-icons/ri";
import { RiLayout2Line } from "react-icons/ri";
import logo from "../../../../public/logo-sm.png"
import { Link } from '@inertiajs/react';
import { useState } from 'react';

function SidebarIcon({ toggleValue, onUpdateSelected  }) {
  const [selected, setSelected] = useState('clientDashboard');
  onUpdateSelected(selected);

  const handleSelectedChange = (e) => {
    setSelected(e);
    onUpdateSelected(e);
  }
 
  return (
    <div className='bg-white w-[70px] drop-shadow min-h-screen'>
      <div class="flex flex-col items-center pt-6">
        <Link href="#" className='mb-6'>
          <img src={logo} alt="" height={22} width={22}/>
        </Link>

        <div className='hover:cursor-pointer flex flex-col gap-3'>

          <Link className={
            selected==='clientDashboard'? 'h-10 w-10 bg-[#DFF1FB] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='clientDashboard'
            onClick={()=>handleSelectedChange('clientDashboard')}
            href='/clients'>
            {
                selected === 'clientDashboard' ? (
                  <RiDashboard2Line style={{ color: '#25a0e2' }} size={20} />
                ) : (
                  <RiDashboard2Line style={{ color: '#6D7080' }} size={20} />
                )
              }
          </Link>

          <Link className={
            selected==='sso'? 'h-10 w-10 bg-[#DFF1FB] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='sso'
            onClick={()=>handleSelectedChange('sso')}
            href='#'>
            {
                selected === 'sso' ? (
                  <RiApps2Line style={{ color: '#25a0e2' }} size={20} />
                ) : (
                  <RiApps2Line style={{ color: '#6D7080' }} size={20} />
                )
              }
          </Link>

          <Link className={
            selected==='api'? 'h-10 w-10 bg-[#DFF1FB] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='api'
            onClick={()=>handleSelectedChange('api')}
            href='#'>
            {
                selected === 'api' ? (
                  <RiLayout2Line style={{ color: '#25a0e2' }} size={20} />
                ) : (
                  <RiLayout2Line style={{ color: '#6D7080' }} size={20} />
                )
              }
          </Link>

        </div>

      </div>
      
    </div>
  )
}

export default SidebarIcon