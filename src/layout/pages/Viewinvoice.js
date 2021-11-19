import React from 'react'
import viewinvoiceCSS from './viewinvoice.module.css'
import viewInvoiceDarkCSS from './viewInvoiceDark.module.css'
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
    const darkMode =  useSelector((state) => state.themeSlice.darkMode)
    
    
    const invoiceData = {
        ...data.invoice,
        services: data.services,
        isLoading: isLoading ? true : false
                        }


    return (
        <div className={darkMode ? viewInvoiceDarkCSS.body : viewinvoiceCSS.body}>
        <Drawer open={drawerOpen} />
            <div className={darkMode ? viewInvoiceDarkCSS.goBack : viewinvoiceCSS.goBack}>
                <Link to="/"><ArrowLeft /></Link>
                <h5 className={darkMode ? viewInvoiceDarkCSS.goBackHeadline : viewinvoiceCSS.goBackHeadline}>Go back</h5>
            </div>
            <Invoicehead invoiceNumber={!isLoading ? data.invoice.invoiceNumber : null} refetch={refetch} status={!isLoading ? data.invoice.status : "IS_LOADING"} />
            <Fullinvoice refetch={refetch} {...invoiceData}  />    
        </div>
    )
}

export default Viewinvoice;