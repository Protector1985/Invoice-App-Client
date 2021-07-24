import React from 'react'
import sidebarCSS from './sidebar.module.css'
import SidebarLogo from './sidebarLogo/SidebarLogo'
import SidebarFooter from './sidebarFooter/SidebarFooter'
import Drawer from '../Drawer/Drawer'


function Sidebar() {
    return (
        <div className={sidebarCSS.masterLight}>
            <div className={sidebarCSS.body}>
                <SidebarLogo />
                <SidebarFooter className={sidebarCSS.footer}/>
            </div>
        </div>
    )
}

export default Sidebar;