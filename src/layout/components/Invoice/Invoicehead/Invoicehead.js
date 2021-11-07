import React from 'react'
import invoiceheadCSS from './invoicehead.module.css'
import invoiceheadDarkCSS from './invoiceheadDark.module.css'
import Statusindicator from '../Statusindicator/Statusindicator'
import Button from '../../Button/Button'
import { useUpdateCommandMutation, useDeleteInvoiceMutation } from '../../../../Redux/services/invoiceDataService'
import {useSelector} from 'react-redux'




function Invoicehead({invoiceNumber, status}) {
    const darkMode = useSelector((state) => state.themeSlice.darkMode)
    const [submitTrigger,{ endpointName , data,  isError, isUninitialized, isLoading, isSuccess, error}] = useUpdateCommandMutation()
   
    


    return (
        <div className={darkMode ? invoiceheadDarkCSS.container : invoiceheadCSS.container}>
                <p className={invoiceheadCSS.statusText}>Status</p>
                <Statusindicator status={!data ? status : data.status} />
            <div className={invoiceheadCSS.btnContainer}>
                <Button description="Edit" mode={darkMode? "dark" : "light"} type={3} invoiceNumber={invoiceNumber}  />
                <Button description="Delete" invoiceNumber={invoiceNumber} clicked={submitTrigger} mode="light" type={5} />
                <Button description="Mark as Paid" mode="light" invoiceNumber={invoiceNumber} clicked={submitTrigger}  type={2} />
            </div>
        </div>
    )
}

export default Invoicehead;