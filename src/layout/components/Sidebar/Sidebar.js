import React from 'react'
import sidebarCSS from './sidebar.module.css'
import sidebarDarkCSS from './sidebarDark.module.css'
import SidebarLogo from './sidebarLogo/SidebarLogo.js'
import SidebarFooter from './sidebarFooter/SidebarFooter'
import Drawer from '../Drawer/Drawer'
import {useSelector} from 'react-redux'


function Sidebar() {
    const darkMode = useSelector((state) => state.themeSlice.darkMode)
    return (
        <div className={darkMode ? sidebarDarkCSS.master : sidebarCSS.master}>
            <div className={darkMode ? sidebarDarkCSS.body : sidebarCSS.body}>
                <SidebarLogo />
                <SidebarFooter className={darkMode ? sidebarDarkCSS.footer : sidebarCSS.footer}/>
            </div>
        </div>
    )
}

export default Sidebar;