import React from 'react'
import invoiceheadCSS from './invoicehead.module.css'
import Statusindicator from '../Statusindicator/Statusindicator'
import {Spinner} from 'reactstrap'
import Button from '../../Button/Button'
import {toggleOpen} from '../../../../Redux/drawerSlice'
import { useUpdatePaymentMutation } from '../../../../Redux/services/invoiceDataService'
import {useDispatch} from 'react-redux'
import { CssBaseline } from '@material-ui/core'

function Invoicehead({invoiceNumber, status}) {
    const [submitData, {isError, isUninitialized, isLoading, isSuccess, error}] = useUpdatePaymentMutation()
    // let { data = [], error, isLoading} = useGetOneInvoiceQuery(invoiceNumber)
    // console.log(data)


    return (
        <div className={invoiceheadCSS.container}>
                <p className={invoiceheadCSS.statusText}>Status</p>
                <Statusindicator status={status} />
            <div className={invoiceheadCSS.btnContainer}>
                <Button description="Edit" mode="light" type={3} clicked={toggleOpen} invoiceNumber={invoiceNumber}  />
                <Button description="Delete" invoiceNumber={invoiceNumber} mode="light" type={5} />
                <Button description="Mark as Paid" mode="light" invoiceNumber={invoiceNumber} clicked={submitData}  type={2} />
            </div>
        </div>
    )
}

export default Invoicehead;