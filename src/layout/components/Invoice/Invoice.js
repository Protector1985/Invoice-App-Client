import React from 'react'
import invoiceCSS from './invoice.module.css'
import Statusindicator from './Statusindicator/Statusindicator'
import {useSelector} from 'react-redux'
import {ReactComponent as ArrowRight} from '../../../assets/icon-arrow-right.svg'
import {Link} from 'react-router-dom'

function Invoice({invoiceNumber, recipientName, dueDate, status, itemsPurchased, month, day, year, amount}) {
    const dollarConvert = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      const price = dollarConvert.format(amount)

    return (
        <div className={invoiceCSS.container}>
        <h4 className={invoiceCSS.invoiceNumber}><span className={invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
            <p className={invoiceCSS.recipientDate}>{`Due ${day} ${month} ${year}`}</p>
            <p className={invoiceCSS.recipientName}>{recipientName}</p>
            <h3 className={invoiceCSS.amount}>{price}</h3>
            <Statusindicator status={status} />
            <Link to={`/${invoiceNumber}`}><ArrowRight /></Link> 
        
        </div>
    )
}

export default Invoice;

//     