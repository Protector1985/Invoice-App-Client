import React from 'react'
import footerCSS from './sidebarFooter.modules.css'
import {ReactComponent as Moon} from '../../../../assets/icon-moon.svg'
import {ReactComponent as Sun} from '../../../../assets/icon-sun.svg'
import avatar from '../../../../assets/avatar.jpeg'


function SidebarFooter() {
    return (
     
            <div className="footerContainer">
                <Sun className={footerCSS.symbol}/>
                <hr />
                <img className='avatarImage' src={avatar} alt="avatar pic" />
            </div>
            
        
    )
}

export default SidebarFooter;