import React from 'react'
import invoiceCSS from './invoice.module.css'
import Statusindicator from './Statusindicator/Statusindicator'

import {ReactComponent as ArrowRight} from '../../../assets/icon-arrow-right.svg'
import {Link} from 'react-router-dom'

function Invoice({invoiceNumber, recipientName, dueDate, status, itemsPurchased}) {

    let amount = itemsPurchased.map((item) => item.pricePerItem).reduce((a,b) => a+b)
    amount = amount.toFixed(2)
    
    function dollarAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');     
    }

    return (
        <div className={invoiceCSS.container}>
            <h4 className={invoiceCSS.invoiceNumber}><span className={invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
            <p className={invoiceCSS.recipientData}>{`Due ${dueDate}`}</p>
            <p className={invoiceCSS.recipientName}>{recipientName}</p>
            <h3 className={invoiceCSS.amount}>${dollarAmount(amount)}</h3>
            <Statusindicator status={status} />
            <Link to={`/${invoiceNumber}`}><ArrowRight /></Link> 
        </div>
    )
}

export default Invoice;