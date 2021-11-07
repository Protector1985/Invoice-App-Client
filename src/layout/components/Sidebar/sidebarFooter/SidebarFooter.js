import React from 'react'
import footerCSS from './sidebarFooter.modules.css'
import {ReactComponent as Moon} from '../../../../assets/icon-moon.svg'
import {ReactComponent as Sun} from '../../../../assets/icon-sun.svg'
import avatar from '../../../../assets/avatar.jpeg'
import {useSelector, useDispatch} from "react-redux"
import {changeTheme} from '../../../../Redux/themeSlice'


function SidebarFooter() {
    const chosenTheme = useSelector((state) => state.themeSlice.darkMode)
    const dispatch = useDispatch()
    return (
            <div className="footerContainer">
                <Sun onClick={() => dispatch(changeTheme())} className={footerCSS.symbol}/>
                <hr />
                <img className='avatarImage' src={avatar} alt="avatar pic" />
            </div>
            
        
    )
}

export default SidebarFooter;