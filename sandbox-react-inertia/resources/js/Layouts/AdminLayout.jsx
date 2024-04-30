import { useState } from 'react'
import Header from '@/Layouts/Header';
import SidebarIcon from "@/Layouts/adminSidebar/SidebarIcon";
import SidebarSubMenu from "@/Layouts/adminSidebar/SidebarSubMenu";

export default function AdminLayout({ children }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleValue, setToggleValue] = useState(false)
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
    <div className="flex">
          
        {/* Sidebar */}
        
       
          <div className='sticky top-0 flex flex-row'>
            <SidebarIcon toggleValue={toggleValue} onUpdateSelected={handleSelectedIcon}/>
            <SidebarSubMenu toggleValue={toggleValue} selected={selectedIcon}/> 
          </div>
         

        <div className="flex w-full flex-col">
          <Header handleToggleValue={handleToggleValue} />
        {children}
        </div>
    </div>


        setToggleValue(toggle)
    }

    
    return (
        <>
          <div className="flex">
            
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


