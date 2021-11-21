import React from 'react'
import headerCSS from './header.module.css'
import headerDarkCSS from './headerDark.module.css'
import Button from '../../Button/Button'
import Dropdown from 'react-dropdown'
import {ReactComponent as ArrowDown} from '../../../../assets/icon-arrow-down.svg'
import {ReactComponent as ArrowLeft} from '../../../../assets/icon-arrow-left.svg'
import './headStylesheet.css'
import {toggleOpen} from '../../../../Redux/drawerSlice'
import {useSelector, useDispatch} from "react-redux"
import { changeFilter } from "../../../../Redux/filterSlice"
import useDimensions from '../../../../utility/sizing/useDimensions'

function Header({numInvoices, refetch}) {
    const dispatch = useDispatch()
    const filterState = useSelector((state) => state.filterSlice.value)
    const darkMode = useSelector((state) => state.themeSlice.darkMode)
    const {width, height} = useDimensions();


    const dropdownItems = [
        {value: "ALL", label: "Filter by status"},
        {value: "PAID", label:"Paid"},
        {value: "PENDING", label:"Pending"},
        {value: "DRAFT", label:"Draft"},
    ]
    
    function handleChange(e) {
        const payload = {
            type:"Filter",
            value: e.value
        }
        dispatch(changeFilter(payload))
    }


    return (
        <div className="headerContainer">
            <div className={headerCSS.headlineContainer}>
                <h2 className={darkMode? headerDarkCSS.headline : headerCSS.headline}>Invoices</h2> 
                <h5 className={darkMode? headerDarkCSS.invoiceAmount : headerCSS.invoiceAmount}>{numInvoices === 0 ? "No invoices" : `There are ${numInvoices} invoices`}</h5>
            </div>
            <div className="btnDropdownWrapper">
               <Dropdown arrowClassName={darkMode? headerDarkCSS.arrowContainer : headerCSS.arrowContainer} onChange={(e) => handleChange(e)} menuClassName={darkMode? headerDarkCSS.placeholder : headerCSS.placeholder} controlClassName={darkMode ? headerDarkCSS.dropdownContainer : headerCSS.dropdownContainer} options={dropdownItems} arrowClosed={<ArrowDown />} arrowOpen={<ArrowLeft />} placeholder="Filter" /> 
                <Button refetch={refetch} clicked={toggleOpen} description={width < 768 ? "New" : "New Invoice"} mode={darkMode ? "dark" : "light"} type={1} />
            </div>
        </div>
    )
}

export default Header