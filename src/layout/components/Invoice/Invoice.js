import React from 'react'
import invoiceCSS from './invoice.module.css'
import invoiceDarkCSS from './invoiceDark.module.css'
import Statusindicator from './Statusindicator/Statusindicator'
import {useSelector} from 'react-redux'
import {ReactComponent as ArrowRight} from '../../../assets/icon-arrow-right.svg'
import {Link} from 'react-router-dom'
import useDimensions from '../../../utility/sizing/useDimensions'

function Invoice({invoiceNumber, recipientName, dueDate, status, itemsPurchased, month, day, year, amount}) {
    const darkMode = useSelector((state) => state.themeSlice.darkMode)
    const {width, heigth} = useDimensions()
    const dollarConvert = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      const price = dollarConvert.format(amount)

      function returnHtml() {
          if(width >= 768) {
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
          } else if (width < 768) {
            return (
                <Link className={invoiceCSS.link} to={`/${invoiceNumber}`}>
                    <div className={darkMode? invoiceDarkCSS.container : invoiceCSS.container}>
                        
                        <div className={darkMode? invoiceDarkCSS.leftSub : invoiceCSS.leftSub}>
                            <h4 className={darkMode? invoiceDarkCSS.invoiceNumber : invoiceCSS.invoiceNumber}><span className={invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
                            <p className={darkMode? invoiceDarkCSS.recipientDate : invoiceCSS.recipientDate}>{`Due ${day} ${month} ${year}`}</p>
                            <h3 className={darkMode? invoiceDarkCSS.amount : invoiceCSS.amount}>{price}</h3>
                        </div>

                        <div className={darkMode? invoiceDarkCSS.rightSub : invoiceCSS.rightSub}>
                            <p className={darkMode? invoiceDarkCSS.recipientName : invoiceCSS.recipientName}>{recipientName}</p>
                            <Statusindicator status={status} /> 
                        </div>
                        
                    </div>
                </Link> 
              )
          }
      }

    return returnHtml()
}

export default Invoice;

//     