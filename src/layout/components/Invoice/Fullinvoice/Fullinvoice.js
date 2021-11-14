import React from 'react';
import invoiceCSS from './invoice.module.css'
import invoiceDarkCSS from './invoiceDark.module.css'
import {Spinner} from 'reactstrap'
import {useSelector} from 'react-redux'
import getDueDate from '../../../../utility/helpers/getDueDate'
import {SocketContext} from '../../../../context/socket'
import useDimensions from '../../../../utility/sizing/useDimensions'


function Fullinvoice(props) {
    const {width, heigth} = useDimensions()
    const darkMode = useSelector((state) => state.themeSlice.darkMode)
    const [fetchController, setFetchController] = React.useState("")
    const invoice = props
    const amount = props.amount
    const invoiceNumber = props.invoiceNumber
    const totalAmount = amount
    const isLoading = props.isLoading
    const refetch = props.refetch
    const socket = React.useContext(SocketContext)
    
    function dollarAmount (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');     
    }

    const dueDateData = getDueDate(invoice.dueIn, invoice.invoiceDateDay, invoice.invoiceDateYear, invoice.invoiceDateMonth)
   
        
        socket.on("FETCH_ALL", (data) => {
            setFetchController(data)
        })

        React.useEffect(() => {
            console.log("REEEEEEFEEETCH")
            refetch()
        }, [fetchController])
    

        function returnHtml() {
            if(width >= 768) {
                return (
                isLoading ? <Spinner /> :
                        <div className={darkMode ? invoiceDarkCSS.container : invoiceCSS.container}>
                        <div className={darkMode ? invoiceDarkCSS.topContainer :invoiceCSS.topContainer}>
                        <div className={darkMode ? invoiceDarkCSS.numberAndDescriptionContainer : invoiceCSS.numberAndDescriptionContainer}>
                            <h4 className={darkMode ? invoiceDarkCSS.number :invoiceCSS.number}><span className={darkMode ? invoiceDarkCSS.hashtag : invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
                            <p className={darkMode ? invoiceDarkCSS.description : invoiceCSS.description}>{invoice.overallProject}</p>
                        </div>   
                        <div className={darkMode ? invoiceDarkCSS.addressContainer : invoiceCSS.addressContainer}>
                            <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.fromStreet}</p>
                            <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.fromCity}</p>
                            <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.fromZip}</p>
                            <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.fromCountry}</p>
                        </div>
                    </div>

                    <div className={darkMode ? invoiceDarkCSS.centerContainer : invoiceCSS.centerContainer}>
                        <div className={darkMode ? invoiceDarkCSS.centerLeft : invoiceCSS.centerLeft}>
                            <div className={darkMode ? invoiceDarkCSS.invoiceDateContainer : invoiceCSS.invoiceDateContainer}>
                                <p className={darkMode ? invoiceDarkCSS.invoiceHeadline : invoiceCSS.invoiceHeadline}>Invoice Date</p>
                                <h3 className={darkMode ? invoiceDarkCSS.invoiceData : invoiceCSS.invoiceData}>{`${invoice.invoiceDateDay} ${invoice.invoiceDateMonth} ${invoice.invoiceDateYear}`}</h3>
                            </div>
                            <div  className={darkMode ? invoiceDarkCSS.dueDateContainer : invoiceCSS.dueDateContainer}>
                                <p className={darkMode ? invoiceDarkCSS.invoiceHeadline : invoiceCSS.invoiceHeadline}>Payment Due</p>
                                <h3 className={darkMode ? invoiceDarkCSS.invoiceData : invoiceCSS.invoiceData}>{`${dueDateData.dueDay} ${dueDateData.dueMonth} ${dueDateData.dueYear}`}</h3>
                            </div>
                        </div>
                        <div className={invoiceCSS.centerMiddle}>
                                <p className={darkMode ? invoiceDarkCSS.invoiceHeadline : invoiceCSS.invoiceHeadline}>Bill to</p>
                                <h3 className={darkMode ? invoiceDarkCSS.invoiceData : invoiceCSS.invoiceData}>{invoice.recipient}</h3>
                            <div className={darkMode ? invoiceDarkCSS.addressContainerBillTo : invoiceCSS.addressContainerBillTo}>
                                <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.toStreet}</p>
                                <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.toCity}</p>
                                <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.toZip}</p>
                                <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.toCountry}</p>
                            </div>
                        </div>
                        <div className={invoiceCSS.centerRight}>
                                <p className={darkMode ? invoiceDarkCSS.invoiceHeadline :invoiceCSS.invoiceHeadline}>Sent to</p>
                                <h3 className={darkMode ? invoiceDarkCSS.invoiceData : invoiceCSS.invoiceData}>{invoice.email}</h3>
                        </div>
                    </div>
                    <div className={darkMode ? invoiceDarkCSS.bottomContainer : invoiceCSS.bottomContainer}>
                        <div className={darkMode ? invoiceDarkCSS.breakdown : invoiceCSS.breakdown}>
                            <div className={darkMode ? invoiceDarkCSS.itemNameContainer : invoiceCSS.itemNameContainer}>
                                <p className={darkMode ? invoiceDarkCSS.invoiceHeadlineBreakdown : invoiceCSS.invoiceHeadlineBreakdown}>Item Name</p>
                                {invoice.services.map((item) => {
                                    return <p className={darkMode ? invoiceDarkCSS.itemName : invoiceCSS.itemName}>{item.description}</p>
                                })}
                                
                            </div>
                            <div className={darkMode ? invoiceDarkCSS.qtyContainer : invoiceCSS.qtyContainer}>
                                <p className={darkMode ? invoiceDarkCSS.invoiceHeadlineBreakdown : invoiceCSS.invoiceHeadlineBreakdown}>QTY.</p>
                                
                                {invoice.services.map((item) => {
                                    return <p className={darkMode ? invoiceDarkCSS.itemAmountandPrice : invoiceCSS.itemAmountandPrice}>{item.qty}</p>
                                })}
                            </div>
                            <div className={darkMode ? invoiceDarkCSS.priceContainer : invoiceCSS.priceContainer}>
                                <p className={darkMode ? invoiceDarkCSS.invoiceHeadlineBreakdown : invoiceCSS.invoiceHeadlineBreakdown}>Price</p>
                                {invoice.services.map((item)=> {
                                    return <p className={darkMode ? invoiceDarkCSS.itemAmountandPrice : invoiceCSS.itemAmountandPrice}>${dollarAmount(item.pricePerItem.toFixed(2))}</p>
                                })}
                            
                            </div>
                            <div className={darkMode ? invoiceDarkCSS.totalContainer : invoiceCSS.totalContainer}>
                                <p className={darkMode ? invoiceDarkCSS.invoiceHeadlineBreakdown : invoiceCSS.invoiceHeadlineBreakdown}>Total</p>
                                {invoice.services.map((item)=> {
                                    return <p className={darkMode ? invoiceDarkCSS.itemName : invoiceCSS.itemName}>${dollarAmount((item.pricePerItem * item.qty).toFixed(2))}</p>
                                })}
                            </div>
                        </div>
                        <div className={darkMode ? invoiceDarkCSS.result : invoiceCSS.result}>
                            <p className={darkMode ? invoiceDarkCSS.amountDueDescription : invoiceCSS.amountDueDescription}>Amount due</p>
                            <p className={darkMode ? invoiceDarkCSS.totalPrice : invoiceCSS.totalPrice}>${totalAmount}</p>
                        </div>
                    </div>
                </div>
                )

            } else if (width < 768) {
                return (
                    isLoading ? <Spinner /> :
                            <div className={darkMode ? invoiceDarkCSS.container : invoiceCSS.container}>
                            <div className={darkMode ? invoiceDarkCSS.topContainer :invoiceCSS.topContainer}>
                            <div className={darkMode ? invoiceDarkCSS.numberAndDescriptionContainer : invoiceCSS.numberAndDescriptionContainer}>
                                <h4 className={darkMode ? invoiceDarkCSS.number :invoiceCSS.number}><span className={darkMode ? invoiceDarkCSS.hashtag : invoiceCSS.hashtag}>#</span>{invoiceNumber}</h4>
                                <p className={darkMode ? invoiceDarkCSS.description : invoiceCSS.description}>{invoice.overallProject}</p>
                            </div>   
                            <div className={darkMode ? invoiceDarkCSS.addressContainer : invoiceCSS.addressContainer}>
                                <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.fromStreet}</p>
                                <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.fromCity}</p>
                                <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.fromZip}</p>
                                <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.fromCountry}</p>
                            </div>
                        </div>
    
                        <div className={darkMode ? invoiceDarkCSS.centerContainer : invoiceCSS.centerContainer}>
                            <div className={darkMode ? invoiceDarkCSS.centerLeft : invoiceCSS.centerLeft}>
                                <div className={darkMode ? invoiceDarkCSS.invoiceDateContainer : invoiceCSS.invoiceDateContainer}>
                                    <p className={darkMode ? invoiceDarkCSS.invoiceHeadline : invoiceCSS.invoiceHeadline}>Invoice Date</p>
                                    <h3 className={darkMode ? invoiceDarkCSS.invoiceData : invoiceCSS.invoiceData}>{`${invoice.invoiceDateDay} ${invoice.invoiceDateMonth} ${invoice.invoiceDateYear}`}</h3>
                                </div>
                                <div  className={darkMode ? invoiceDarkCSS.dueDateContainer : invoiceCSS.dueDateContainer}>
                                    <p className={darkMode ? invoiceDarkCSS.invoiceHeadline : invoiceCSS.invoiceHeadline}>Payment Due</p>
                                    <h3 className={darkMode ? invoiceDarkCSS.invoiceData : invoiceCSS.invoiceData}>{`${dueDateData.dueDay} ${dueDateData.dueMonth} ${dueDateData.dueYear}`}</h3>
                                </div>
                            </div>
                            <div className={invoiceCSS.centerMiddle}>
                                    <p className={darkMode ? invoiceDarkCSS.invoiceHeadline : invoiceCSS.invoiceHeadline}>Bill to</p>
                                    <h3 className={darkMode ? invoiceDarkCSS.invoiceData : invoiceCSS.invoiceData}>{invoice.recipient}</h3>
                                <div className={darkMode ? invoiceDarkCSS.addressContainerBillTo : invoiceCSS.addressContainerBillTo}>
                                    <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.toStreet}</p>
                                    <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.toCity}</p>
                                    <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.toZip}</p>
                                    <p className={darkMode ? invoiceDarkCSS.address : invoiceCSS.address}>{invoice.toCountry}</p>
                                </div>
                            </div>
                            <div className={invoiceCSS.centerRight}>
                                    <p className={darkMode ? invoiceDarkCSS.invoiceHeadline :invoiceCSS.invoiceHeadline}>Sent to</p>
                                    <h3 className={darkMode ? invoiceDarkCSS.invoiceData : invoiceCSS.invoiceData}>{invoice.email}</h3>
                            </div>
                        </div>
                        <div className={darkMode ? invoiceDarkCSS.bottomContainer : invoiceCSS.bottomContainer}>
                            <div className={darkMode ? invoiceDarkCSS.breakdown : invoiceCSS.breakdown}>
                                <div className={darkMode ? invoiceDarkCSS.itemNameContainer : invoiceCSS.itemNameContainer}>
                                    <p className={darkMode ? invoiceDarkCSS.invoiceHeadlineBreakdown : invoiceCSS.invoiceHeadlineBreakdown}>Item Name</p>
                                    {invoice.services.map((item) => {
                                        return <p className={darkMode ? invoiceDarkCSS.itemName : invoiceCSS.itemName}>{item.description}</p>
                                    })}
                                    
                                </div>
                                <div className={darkMode ? invoiceDarkCSS.qtyContainer : invoiceCSS.qtyContainer}>
                                    <p className={darkMode ? invoiceDarkCSS.invoiceHeadlineBreakdown : invoiceCSS.invoiceHeadlineBreakdown}>QTY.</p>
                                    
                                    {invoice.services.map((item) => {
                                        return <p className={darkMode ? invoiceDarkCSS.itemAmountandPrice : invoiceCSS.itemAmountandPrice}>{item.qty}</p>
                                    })}
                                </div>
                                <div className={darkMode ? invoiceDarkCSS.priceContainer : invoiceCSS.priceContainer}>
                                    <p className={darkMode ? invoiceDarkCSS.invoiceHeadlineBreakdown : invoiceCSS.invoiceHeadlineBreakdown}>Price</p>
                                    {invoice.services.map((item)=> {
                                        return <p className={darkMode ? invoiceDarkCSS.itemAmountandPrice : invoiceCSS.itemAmountandPrice}>${dollarAmount(item.pricePerItem.toFixed(2))}</p>
                                    })}
                                
                                </div>
                                <div className={darkMode ? invoiceDarkCSS.totalContainer : invoiceCSS.totalContainer}>
                                    <p className={darkMode ? invoiceDarkCSS.invoiceHeadlineBreakdown : invoiceCSS.invoiceHeadlineBreakdown}>Total</p>
                                    {invoice.services.map((item)=> {
                                        return <p className={darkMode ? invoiceDarkCSS.itemName : invoiceCSS.itemName}>${dollarAmount((item.pricePerItem * item.qty).toFixed(2))}</p>
                                    })}
                                </div>
                            </div>
                            <div className={darkMode ? invoiceDarkCSS.result : invoiceCSS.result}>
                                <p className={darkMode ? invoiceDarkCSS.amountDueDescription : invoiceCSS.amountDueDescription}>Amount due</p>
                                <p className={darkMode ? invoiceDarkCSS.totalPrice : invoiceCSS.totalPrice}>${totalAmount}</p>
                            </div>
                        </div>
                    </div>
                    )
            }
        }

    return returnHtml()
}

export default Fullinvoice;