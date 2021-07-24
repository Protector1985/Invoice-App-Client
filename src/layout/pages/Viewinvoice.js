import React from 'react'
import viewinvoiceCSS from './viewinvoice.module.css'
import {ReactComponent as ArrowLeft} from '../../assets/icon-arrow-left.svg'
import Invoicehead from '../components/Invoice/Invoicehead/Invoicehead'
import Fullinvoice from '../components/Invoice/Fullinvoice/Fullinvoice'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Drawer from '../components/Drawer/Drawer'

function Viewinvoice(props) {
    const currentInvoice = props.history.location.pathname.substr(1)
    const {invoiceData} = useSelector((state) => state.invoiceData)
    const {drawerOpen} = useSelector((state) => state.drawerOpen)
    const invoice = invoiceData.filter((invoice) => invoice.invoiceNumber === currentInvoice)
   

    return (
        <div className={viewinvoiceCSS.bodyLight}>
        <Drawer open={drawerOpen} />
            <div className={viewinvoiceCSS.goBack}>
                <Link to="/"><ArrowLeft /></Link>
                <h5 className={viewinvoiceCSS.goBackHeadline}>Go back</h5>
            </div>
            <Invoicehead invoiceNumber={invoice[0].invoiceNumber} />
            <Fullinvoice {...invoice[0]} />
        </div>
    )
}

export default Viewinvoice;