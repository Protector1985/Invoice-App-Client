import React from 'react'
import invoiceCSS from './invoice.module.css'
import Statusindicator from './Statusindicator/Statusindicator'
import useDimensions from '../../../utility/sizing/useDimensions'
import {ReactComponent as ArrowRight} from '../../../assets/icon-arrow-right.svg'
import {Link} from 'react-router-dom'

function Invoice({invoiceNumber, recipientName, dueDate, amount, status}) {
    




    return (
        <div className={invoiceCSS.container}>
            <h4 className={invoiceCSS.invoiceNumber}><span className={invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
            <p className={invoiceCSS.recipientData}>{`Due ${dueDate}`}</p>
            <p className={invoiceCSS.recipientName}>{recipientName}</p>
            <h3 className={invoiceCSS.amount}>{amount}</h3>
            <Statusindicator status={status} />
            <Link to={`/${invoiceNumber}`}><ArrowRight /></Link> 
        </div>
    )
}

export default Invoice;