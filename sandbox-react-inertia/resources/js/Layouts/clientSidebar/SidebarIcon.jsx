import { RiDashboard2Line } from "react-icons/ri";
import { RiApps2Line } from "react-icons/ri";
import { RiLayout2Line } from "react-icons/ri";
import logo from "../../../../public/logo-sm.png"
import { Link } from '@inertiajs/react';
import { useState } from 'react';

function SidebarIcon({ toggleValue, onUpdateSelected  }) {
  const currentUrl = window.location.pathname;
  const lastPortion = currentUrl.split('/').pop();
  console.log(lastPortion);

  const [selected, setSelected] = useState('clientDashboard');
  onUpdateSelected(selected);

  const handleSelectedChange = (e) => {
    setSelected(e);
    onUpdateSelected(e);
  }
 
  return (
    <div className='bg-white w-[70px] drop-shadow min-h-screen'>
      <div class="flex flex-col items-center pt-6 sticky top-0 left-0">
        <Link href={route('clients')} className='mb-6'>
          <img src={logo} alt="" height={22} width={22}/>
        </Link>

        <div className='hover:cursor-pointer flex flex-col gap-3'>

          <Link className={
            lastPortion==='clients'? 'h-10 w-10 bg-[#DFF1FB] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='clientDashboard'
            onClick={()=>handleSelectedChange('clientDashboard')}
            href={route('clients')}>
            {
                lastPortion === 'clients' ? (
                  <RiDashboard2Line style={{ color: '#25a0e2' }} size={20} />
                ) : (
                  <RiDashboard2Line style={{ color: '#6D7080' }} size={20} />
                )
              }
          </Link>

          <Link className={
            lastPortion==='sso'? 'h-10 w-10 bg-[#DFF1FB] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='sso'
            onClick={()=>handleSelectedChange('sso')}
            href={route('sso')}>
            {
                lastPortion === 'sso' ? (
                  <RiApps2Line style={{ color: '#25a0e2' }} size={20} />
                ) : (
                  <RiApps2Line style={{ color: '#6D7080' }} size={20} />
                )
              }
          </Link>

          <Link className={
            lastPortion==='api'? 'h-10 w-10 bg-[#DFF1FB] rounded flex items-center justify-center'
            :'h-10 w-10 rounded flex items-center justify-center'} 
            id='api'
            onClick={()=>handleSelectedChange('api')}
            href={route('api')}>
            {
                lastPortion === 'api' ? (
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