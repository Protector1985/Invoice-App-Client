import React from 'react';
import invoiceCSS from './invoice.module.css'
import {Spinner} from 'reactstrap'
import {useSelector} from 'react-redux'
import getDueDate from '../../../../utility/helpers/getDueDate'


function Fullinvoice(props) {
    const invoice = props
    const amount = props.amount
    const invoiceNumber = props.invoiceNumber
    const totalAmount = amount
    const isLoading = props.isLoading
    
    // const invoices = useSelector((state) => state.invoiceData.invoiceData);
    // let invoice = invoices.filter((item) => item.invoiceNumber === invoiceNumber);
    // invoice = invoice[0]

    // let totalAmount = invoice.itemsPurchased.map((item) => item.pricePerItem * item.qty).reduce((a,b) => a + b)
    // totalAmount = totalAmount.toFixed(2)
    

    function dollarAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');     
    }

    // // console.log(invoice.invoiceDateDay, invoice.invoiceDateMonth, invoice.invoiceDateYear, invoice.dueIn)
    const dueDateData = getDueDate(invoice.dueIn, invoice.invoiceDateDay, invoice.invoiceDateYear, invoice.invoiceDateMonth)
    // console.log(dueDateData)


    return(
        isLoading ? <Spinner /> :
        <div className={invoiceCSS.container}>
        
            <div className={invoiceCSS.topContainer}>
                <div className={invoiceCSS.numberAndDescriptionContainer}>
                    <h4 className={invoiceCSS.number}><span className={invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
                    <p className={invoiceCSS.description}>{invoice.overallProject}</p>
                </div>   
                <div className={invoiceCSS.addressContainer}>
                    <p className={invoiceCSS.address}>{invoice.fromStreet}</p>
                    <p className={invoiceCSS.address}>{invoice.fromCity}</p>
                    <p className={invoiceCSS.address}>{invoice.fromZip}</p>
                    <p className={invoiceCSS.address}>{invoice.fromCountry}</p>
                </div>
            </div>

            <div className={invoiceCSS.centerContainer}>
                <div className={invoiceCSS.centerLeft}>
                    <div className={invoiceCSS.invoiceDateContainer}>
                        <p className={invoiceCSS.invoiceHeadline}>Invoice Date</p>
                        <h3 className={invoiceCSS.invoiceData}>{`${invoice.invoiceDateDay} ${invoice.invoiceDateMonth} ${invoice.invoiceDateYear}`}</h3>
                    </div>
                    <div  className={invoiceCSS.dueDateContainer}>
                        <p className={invoiceCSS.invoiceHeadline}>Payment Due</p>
                        <h3 className={invoiceCSS.invoiceData}>{`${dueDateData.dueDay} ${dueDateData.dueMonth} ${dueDateData.dueYear}`}</h3>
                    </div>
                </div>
                <div className={invoiceCSS.centerMiddle}>
                        <p className={invoiceCSS.invoiceHeadline}>Bill to</p>
                        <h3 className={invoiceCSS.invoiceData}>{invoice.recipient}</h3>
                    <div className={invoiceCSS.addressContainerBillTo}>
                        <p className={invoiceCSS.address}>{invoice.toStreet}</p>
                        <p className={invoiceCSS.address}>{invoice.toCity}</p>
                        <p className={invoiceCSS.address}>{invoice.toZip}</p>
                        <p className={invoiceCSS.address}>{invoice.toCountry}</p>
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
                        {invoice.services.map((item) => {
                            return <p className={invoiceCSS.itemName}>{item.description}</p>
                        })}
                        
                    </div>
                    <div className={invoiceCSS.qtyContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>QTY.</p>
                        
                        {invoice.services.map((item) => {
                            return <p className={invoiceCSS.itemAmountandPrice}>{item.qty}</p>
                        })}
                    </div>
                    <div className={invoiceCSS.priceContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>Price</p>
                        {invoice.services.map((item)=> {
                            return <p className={invoiceCSS.itemAmountandPrice}>${dollarAmount(item.pricePerItem.toFixed(2))}</p>
                        })}
                       
                    </div>
                    <div className={invoiceCSS.totalContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>Total</p>
                        {invoice.services.map((item)=> {
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