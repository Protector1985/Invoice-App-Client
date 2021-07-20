import React from 'react'
import invoiceCSS from './invoice.module.css'
import Statusindicator from './Statusindicator/Statusindicator'

function Invoice({invoiceNumber, recipientName, dueDate, amount, status}) {
    return (
        <div className={invoiceCSS.container}>
            <h4 className={invoiceCSS.invoiceNumber}>{invoiceNumber}</h4>
            <p className={invoiceCSS.recipientData}>{dueDate}</p>
            <p className={invoiceCSS.recipientData}>{recipientName}</p>
            <h3 className={invoiceCSS.amount}>{amount}</h3>
            <Statusindicator status={status} />
        </div>
    )
}

export default Invoice;