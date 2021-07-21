import React from 'react';
import invoiceCSS from './invoice.module.css'

function Fullinvoice({email, invoiceNumber, invoiceDate, dueDate, recipient, itemsPurchased, amount, street, zip, city, country, service, status,}) {


    return(
        <div className={invoiceCSS.container}>
            <div className={invoiceCSS.topContainer}>
                <div className={invoiceCSS.numberAndDescriptionContainer}>
                    <h4 className={invoiceCSS.number}><span className={invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
                    <p className={invoiceCSS.description}>{service}</p>
                </div>
                
                <div className={invoiceCSS.addressContainer}>
                    <p className={invoiceCSS.address}>{street}</p>
                    <p className={invoiceCSS.address}>{city}</p>
                    <p className={invoiceCSS.address}>{zip}</p>
                    <p className={invoiceCSS.address}>{country}</p>
                </div>
            </div>

            <div className={invoiceCSS.centerContainer}>
                <div className={invoiceCSS.centerLeft}>
                    <div className={invoiceCSS.invoiceDateContainer}>
                        <p className={invoiceCSS.invoiceHeadline}>Invoice Date</p>
                        <h3 className={invoiceCSS.invoiceData}>{invoiceDate}</h3>
                    </div>
                    <div  className={invoiceCSS.dueDateContainer}>
                        <p className={invoiceCSS.invoiceHeadline}>Payment Due</p>
                        <h3 className={invoiceCSS.invoiceData}>{dueDate}</h3>
                    </div>
                </div>
                <div className={invoiceCSS.centerMiddle}>
                        <p className={invoiceCSS.invoiceHeadline}>Bill to</p>
                        <h3 className={invoiceCSS.invoiceData}>{recipient}</h3>
                    <div className={invoiceCSS.addressContainerBillTo}>
                        <p className={invoiceCSS.address}>{street}</p>
                        <p className={invoiceCSS.address}>{city}</p>
                        <p className={invoiceCSS.address}>{zip}</p>
                        <p className={invoiceCSS.address}>{country}</p>
                    </div>
                </div>
                <div className={invoiceCSS.centerRight}>
                        <p className={invoiceCSS.invoiceHeadline}>Sent to</p>
                        <h3 className={invoiceCSS.invoiceData}>{email}</h3>
                </div>
            </div>
            <div className={invoiceCSS.bottomContainer}>
                <div className={invoiceCSS.breakdown}>
                    <div className={invoiceCSS.itemNameContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>Item Name</p>
                        {itemsPurchased.map((item) => {
                            return <p className={invoiceCSS.itemName}>{item.description}</p>
                        })}
                        
                    </div>
                    <div className={invoiceCSS.qtyContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>QTY.</p>
                        
                        {itemsPurchased.map((item) => {
                            return <p className={invoiceCSS.itemAmountandPrice}>{item.qty}</p>
                        })}
                    </div>
                    <div className={invoiceCSS.priceContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>Price</p>
                        <p className={invoiceCSS.itemAmountandPrice}>$ {`156.00`}</p>
                        <p className={invoiceCSS.itemAmountandPrice}>$ {`200.00`}</p>
                    </div>
                    <div className={invoiceCSS.totalContainer}>
                        <p className={invoiceCSS.invoiceHeadlineBreakdown}>Total</p>
                        <p className={invoiceCSS.itemName}>$ {`156.00`}</p>
                        <p className={invoiceCSS.itemName}>$ {`200.00`}</p>
                    </div>
                </div>
                <div className={invoiceCSS.result}>
                    <p className={invoiceCSS.amountDueDescription}>Amount due</p>
                    <p className={invoiceCSS.totalPrice}>$ {`356.00`}</p>
                </div>
            </div>

        </div>
    )
}

export default Fullinvoice;