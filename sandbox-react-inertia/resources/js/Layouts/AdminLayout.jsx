import { useState } from 'react'
import Header from '@/Layouts/Header';
import SidebarIcon from "@/Layouts/adminSidebar/SidebarIcon";
import SidebarSubMenu from "@/Layouts/adminSidebar/SidebarSubMenu";

export default function AdminLayout({ children }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleValue, setToggleValue] = useState(true)
    const handleToggleValue = (toggle) => {

    setToggleValue(toggle);
    };

    const [selectedIcon, setSelectedIcon] = useState('dashboard');

    const handleSelectedIcon = (value) => {
      setSelectedIcon(value);
      console.log(selectedIcon);
    };
  
  
    
    return (
        <>
          <div className="bg-[#f3f3f9] flex">
            
              {/* Sidebar */}
              <div className='sticky top-0 flex flex-row'>
                <SidebarIcon toggleValue={toggleValue}/>
                <SidebarSubMenu toggleValue={toggleValue}/> 
              </div>
      

              {/* Right Side content */}
              <div className="flex flex-col w-screen">
                <Header handleToggleValue={handleToggleValue} />
                {children}
              </div>
              
          </div>
        </>
    )
}


