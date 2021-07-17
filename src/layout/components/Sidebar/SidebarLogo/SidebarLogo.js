import React from 'react'
import logoCSS from './logo.module.css'

function SidebarLogo() {

    return (
        <div className={logoCSS.container}>
            <div className={logoCSS.darkBlue}></div>
            <div className={logoCSS.pie}><div className={logoCSS.tenth}></div></div>
            <div className={logoCSS.lightBlue}></div>
        </div>
    ) 
   
}

export default SidebarLogo;