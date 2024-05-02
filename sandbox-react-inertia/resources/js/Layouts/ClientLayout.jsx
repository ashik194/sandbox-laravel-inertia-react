import { useState } from 'react'
import Header from '@/Layouts/Header';
import SidebarIcon from "@/Layouts/clientSidebar/SidebarIcon";
import SidebarSubMenu from "@/Layouts/clientSidebar/SidebarSubMenu";

export default function ClientLayout({ children }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleValue, setToggleValue] = useState(true)
    const handleToggleValue = (toggle) => {
        setToggleValue(toggle)
    }
    
    const [selectedIcon, setSelectedIcon] = useState('clientDashboard');

    const handleSelectedIcon = (value) => {
      setSelectedIcon(value);
      console.log(selectedIcon);
    };

    return (
        <>
        <div className="bg-[#f3f3f9] flex">
          
            {/* Sidebar */}
            
            <div className='sticky top-0 flex flex-row'>
                <SidebarIcon toggleValue={toggleValue} onUpdateSelected={handleSelectedIcon}/>
                <SidebarSubMenu toggleValue={toggleValue} selected={selectedIcon}/> 
            </div>
    
            <div className="flex flex-col w-screen">
            <Header handleToggleValue={handleToggleValue} />
            {children}
            </div>
        </div>

        </>
    )
}
