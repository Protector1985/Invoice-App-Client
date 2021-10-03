import React from 'react'
import viewinvoiceCSS from './viewinvoice.module.css'
import {ReactComponent as ArrowLeft} from '../../assets/icon-arrow-left.svg'
import Invoicehead from '../components/Invoice/Invoicehead/Invoicehead'
import Fullinvoice from '../components/Invoice/Fullinvoice/Fullinvoice'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useGetOneInvoiceQuery } from '../../Redux/services/invoiceDataService'
import Drawer from '../components/Drawer/Drawer'
import useDeepCompareEffect from 'use-deep-compare-effect'

function Viewinvoice(props) {
    const currentInvoice = props.history.location.pathname.substr(1)
    const {drawerOpen} = useSelector((state) => state.drawerOpen)
    let { data = [], refetch, error, isLoading} = useGetOneInvoiceQuery(currentInvoice)
    
    
    const invoiceData = {
        ...data.invoice,
        services: data.services,
        isLoading: isLoading ? true : false
                        }


    return (
        <div className={viewinvoiceCSS.bodyLight}>
        <Drawer open={drawerOpen} />
            <div className={viewinvoiceCSS.goBack}>
                <Link to="/"><ArrowLeft /></Link>
                <h5 className={viewinvoiceCSS.goBackHeadline}>Go back</h5>
            </div>
            <Invoicehead invoiceNumber={!isLoading ? data.invoice.invoiceNumber : null} refetch={refetch} status={!isLoading ? data.invoice.status : "IS_LOADING"} />
            <Fullinvoice {...invoiceData}  />    
        </div>
    )
}

export default Viewinvoice;