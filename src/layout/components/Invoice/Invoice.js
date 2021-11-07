import React from 'react'
import invoiceCSS from './invoice.module.css'
import invoiceDarkCSS from './invoiceDark.module.css'
import Statusindicator from './Statusindicator/Statusindicator'
import {useSelector} from 'react-redux'
import {ReactComponent as ArrowRight} from '../../../assets/icon-arrow-right.svg'
import {Link} from 'react-router-dom'

function Invoice({invoiceNumber, recipientName, dueDate, status, itemsPurchased, month, day, year, amount}) {
    const darkMode = useSelector((state) => state.themeSlice.darkMode)
    const dollarConvert = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      const price = dollarConvert.format(amount)

    return (
        <div className={darkMode? invoiceDarkCSS.container : invoiceCSS.container}>
        <h4 className={darkMode? invoiceDarkCSS.invoiceNumber : invoiceCSS.invoiceNumber}><span className={invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
            <p className={darkMode? invoiceDarkCSS.recipientDate : invoiceCSS.recipientDate}>{`Due ${day} ${month} ${year}`}</p>
            <p className={darkMode? invoiceDarkCSS.recipientName : invoiceCSS.recipientName}>{recipientName}</p>
            <h3 className={darkMode? invoiceDarkCSS.amount : invoiceCSS.amount}>{price}</h3>
            <Statusindicator status={status} />
            <Link to={`/${invoiceNumber}`}><ArrowRight /></Link> 
        
        </div>
    )
}

export default Invoice;

//     