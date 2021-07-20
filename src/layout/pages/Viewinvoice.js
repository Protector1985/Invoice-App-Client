import React from 'react'
import viewinvoiceCSS from './viewinvoice.module.css'
import {ReactComponent as ArrowLeft} from '../../assets/icon-arrow-left.svg'
import Invoicehead from '../components/Invoice/Invoicehead/Invoicehead'

function Viewinvoice() {
    return (
        <div className={viewinvoiceCSS.bodyLight}>
            <div className={viewinvoiceCSS.goBack}>
                <ArrowLeft />
                <h5 className={viewinvoiceCSS.goBackHeadline}>Go back</h5>
            </div>
            <Invoicehead />
        </div>
    )
}

export default Viewinvoice;