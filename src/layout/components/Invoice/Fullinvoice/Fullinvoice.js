import React from 'react';
import invoiceCSS from './invoice.module.css'
import {useSelector} from 'react-redux'


function Fullinvoice({ invoiceNumber, service}) {
    
    const invoices = useSelector((state) => state.invoiceData.invoiceData);
    let invoice = invoices.filter((item) => item.invoiceNumber === invoiceNumber);
    invoice = invoice[0]

    let totalAmount = invoice.itemsPurchased.map((item) => item.pricePerItem * item.qty).reduce((a,b) => a + b)
    totalAmount = totalAmount.toFixed(2)
    

    function dollarAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');     
    }



    return(
        <div className={invoiceCSS.container}>
            <div className={invoiceCSS.topContainer}>
                <div className={invoiceCSS.numberAndDescriptionContainer}>
                    <h4 className={invoiceCSS.number}><span className={invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
                    <p className={invoiceCSS.description}>{invoice.service}</p>
                </div>
                
                <div className={invoiceCSS.addressContainer}>
                    <p className={invoiceCSS.address}>{invoice.street}</p>
                    <p className={invoiceCSS.address}>{invoice.city}</p>
                    <p className={invoiceCSS.address}>{invoice.zip}</p>
                    <p className={invoiceCSS.address}>{invoice.country}</p>
                </div>
            </div>

            <div className={invoiceCSS.centerContainer}>
                <div className={invoiceCSS.centerLeft}>
                    <div className={invoiceCSS.invoiceDateContainer}>
                        <p className={invoiceCSS.invoiceHeadline}>Invoice Date</p>
                        <h3 className={invoiceCSS.invoiceData}>{invoice.invoiceDate}</h3>
                    </div>
                    <div  className={invoiceCSS.dueDateContainer}>
                        <p className={invoiceCSS.invoiceHeadline}>Payment Due</p>
                        <h3 className={invoiceCSS.invoiceData}>{invoice.dueDate}</h3>
                    </div>
                </div>
                <div className={invoiceCSS.centerMiddle}>
                        <p className={invoiceCSS.invoiceHeadline}>Bill to</p>
                        <h3 className={invoiceCSS.invoiceData}>{invoice.recipient}</h3>
                    <div className={invoiceCSS.addressContainerBillTo}>
                        <p className={invoiceCSS.address}>{invoice.street}</p>
                        <p className={invoiceCSS.address}>{invoice.city}</p>
                        <p className={invoiceCSS.address}>{invoice.zip}</p>
                        <p className={invoiceCSS.address}>{invoice.country}</p>
                    </div>
                </div>
                <div className={invoiceCSS.centerRight}>
                        <p className={invoiceCSS.invoiceHeadline}>Sent to</p>
                        <h3 className={invoiceCSS.invoiceData}>{invoice.email}</h3>
                </div>
            </div>
            <div className={invoiceCSS.bottomContainer}>
                <div className={invoiceCSS.breakdown}>
                    <div className={invoiceCSS.itemNameContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>Item Name</p>
                        {invoice.itemsPurchased.map((item) => {
                            return <p className={invoiceCSS.itemName}>{item.description}</p>
                        })}
                        
                    </div>
                    <div className={invoiceCSS.qtyContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>QTY.</p>
                        
                        {invoice.itemsPurchased.map((item) => {
                            return <p className={invoiceCSS.itemAmountandPrice}>{item.qty}</p>
                        })}
                    </div>
                    <div className={invoiceCSS.priceContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>Price</p>
                        {invoice.itemsPurchased.map((item)=> {
                            return <p className={invoiceCSS.itemAmountandPrice}>${dollarAmount(item.pricePerItem.toFixed(2))}</p>
                        })}
                       
                    </div>
                    <div className={invoiceCSS.totalContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>Total</p>
                        {invoice.itemsPurchased.map((item)=> {
                            return <p className={invoiceCSS.itemName}>${dollarAmount((item.pricePerItem * item.qty).toFixed(2))}</p>
                        })}
                    </div>
                </div>
                <div className={invoiceCSS.result}>
                    <p className={invoiceCSS.amountDueDescription}>Amount due</p>
                    <p className={invoiceCSS.totalPrice}>${totalAmount}</p>
                </div>
            </div>
            

        </div>
    )
}

export default Fullinvoice;