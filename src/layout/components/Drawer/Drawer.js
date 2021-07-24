import React from 'react'
import drawerCSS from './drawer.module.css'
import Button from '../Button/Button'
import {toggleClose} from '../../../Redux/drawerSlice'
import {useSelector} from 'react-redux'


function Drawer({open}) {
    const modType = useSelector((state) => state.drawerOpen.modType)
    const invoiceNumber = useSelector((state)=> state.drawerOpen.invoiceNumber)
    const hidden = {
        "display": "none"
    }
   

    return (
        <div style={!open ? hidden : null} className={drawerCSS.container}>
            <h5>{modType}<span>#</span>{invoiceNumber}</h5>
            <Button description="Cancel" mode="light" type={3} clicked={toggleClose} />
            <Button description="Submit" mode="light" type={2}  />
        </div>
    )
}

export default Drawer;
