import React from 'react'
import headerCSS from './header.module.css'
import Button from '../../Button/Button'
import Dropdown from 'react-dropdown'
import {ReactComponent as ArrowDown} from '../../../../assets/icon-arrow-down.svg'
import {ReactComponent as ArrowLeft} from '../../../../assets/icon-arrow-left.svg'
import './headStylesheet.css'
import {toggleOpen} from '../../../../Redux/drawerSlice'

function Header({numInvoices}) {
    const dropdownItems = [
        {value: "PAID", label:"Paid"},
        {value: "PENDING", label:"Pending"},
        {value: "DRAFT", label:"Draft"},
    ]

    return (
        <div className="headerContainer">
            <div className={headerCSS.headlineContainer}>
                <h2 className={headerCSS.headline}>Invoices</h2> 
                <h5 className={headerCSS.invoiceAmount}>{numInvoices === 0 ? "No invoices" : `There are ${numInvoices} invoices`}</h5>
            </div>
            <div className="btnDropdownWrapper">
                <Dropdown arrowClassName={headerCSS.arrowContainer} menuClassName={headerCSS.placeholder} controlClassName={headerCSS.dropdownContainer} options={dropdownItems} arrowClosed={<ArrowDown />} arrowOpen={<ArrowLeft/>} placeholder="Filter by status" />
                <Button clicked={toggleOpen} description="New Invoice" mode="light" type={1} />
            </div>
        </div>
    )
}

export default Header