import React from 'react'
import invoiceCSS from './invoice.module.css'
import Statusindicator from './Statusindicator/Statusindicator'
import {useSelector} from 'react-redux'
import {ReactComponent as ArrowRight} from '../../../assets/icon-arrow-right.svg'
import {Link} from 'react-router-dom'

function Invoice({invoiceNumber, recipientName, dueDate, status, itemsPurchased, month, day, year}) {

    // let amount = itemsPurchased.map((item) => item.pricePerItem).reduce((a,b) => a+b)
    // amount = amount.toFixed(2)
    // console.log(month)
    // console.log(day)
    // console.log(year)
    // function dollarAmount (x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');     
    // }

    // ${dollarAmount(amount)}

    return (
        <div className={invoiceCSS.container}>
        <h4 className={invoiceCSS.invoiceNumber}><span className={invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
            <p className={invoiceCSS.recipientData}>{`Due ${day} ${month} ${year}`}</p>
            <p className={invoiceCSS.recipientName}>{recipientName}</p>
            <h3 className={invoiceCSS.amount}>1000</h3>
            <Statusindicator status={status} />
            <Link to={`/${invoiceNumber}`}><ArrowRight /></Link> 
        
        </div>
    )
}

export default Invoice;

//     