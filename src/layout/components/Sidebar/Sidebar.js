import React from 'react'
import sidebarModule from './sidebar.module.css'
import SidebarLogo from './SidebarLogo/SidebarLogo'

function Sidebar() {
    return (
        <div className={sidebarModule.masterLight}>
            <div className={sidebarModule.body}>
                <SidebarLogo />
                
            </div>
        </div>
    )
}

export default Sidebar;