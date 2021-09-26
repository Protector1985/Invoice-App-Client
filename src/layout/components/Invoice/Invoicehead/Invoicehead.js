import React from 'react'
import invoiceheadCSS from './invoicehead.module.css'
import Statusindicator from '../Statusindicator/Statusindicator'
import {Spinner} from 'reactstrap'
import Button from '../../Button/Button'
import {toggleOpen} from '../../../../Redux/drawerSlice'
import { useUpdatePaymentMutation } from '../../../../Redux/services/invoiceDataService'
import {useDispatch} from 'react-redux'
import { CssBaseline } from '@material-ui/core'


function Invoicehead({invoiceNumber, status, refetch}) {
    
    const [submitData,{ endpointName , data,  isError, isUninitialized, isLoading, isSuccess, error}] = useUpdatePaymentMutation()
    


    return (
        <div className={invoiceheadCSS.container}>
                <p className={invoiceheadCSS.statusText}>Status</p>
                <Statusindicator status={!data ? status : data.status} />
            <div className={invoiceheadCSS.btnContainer}>
                <Button description="Edit" mode="light" type={3} clicked={toggleOpen} invoiceNumber={invoiceNumber}  />
                <Button description="Delete" invoiceNumber={invoiceNumber} mode="light" type={5} />
                <Button description="Mark as Paid" mode="light" refetch={refetch} invoiceNumber={invoiceNumber} clicked={submitData}  type={2} />
            </div>
        </div>
    )
}

export default Invoicehead;