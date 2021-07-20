import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header/Header'
import mainCSS from './main.module.css'
import Invoice from '../Invoice/Invoice'
import getNodeSizeCB from '../../../utility/sizing/getNodeSizeCB'
import {ReactComponent as EmptyPic} from '../../../assets/illustration-empty.svg'
import ViewInvoice from '../../pages/Viewinvoice'
import {BrowserRouter as Router, Route} from 'react-router-dom'


function Main(props) {

    const [invoiceData, setInvoiceData] = React.useState([
        {invoiceNumber:"RT3080", dueDate: "19 Aug 2021", recipient: "Jensen Huang", amount: "$1,080.90", status: "PAID"},
        {invoiceNumber:"XM9141", dueDate: "20 Sep 2021", recipient: "Alex Grim", amount: "$556.00", status: "PENDING"},
        {invoiceNumber:"FV2353", dueDate: "12 Nov 2021", recipient: "Anita Wainwright", amount: "$3,102.04", status: "DRAFT"},
    ])

    // const [invoiceData, setInvoiceData] = React.useState([])


    const bodyContent = React.useCallback((node) => {
        getNodeSizeCB(node, "invoice_invoiceNumber__O8Yds");
        getNodeSizeCB(node, "invoice_recipientData__1RWck" );
        getNodeSizeCB(node, "invoice_amount__1U-gr");
        getNodeSizeCB(node, "invoice_recipientName__adE_o");
    })

    function returnBody() {
        if(invoiceData.length === 0) {
            return (
                <div className={mainCSS.emptyBody}>
                    <EmptyPic />
                    <h3 className={mainCSS.emptyHeadline}>There is nothing here</h3>
                    <p className={mainCSS.emptyText}>  Create an invoice by clicking the <br/> <span style={{"fontWeight": "bold"}}>New Invoice</span> button and get started</p>
                </div>
            ) 
        } else {
           return invoiceData.map((invoice) => {
               return <Invoice key={invoice.invoiceNumber} invoiceNumber={invoice.invoiceNumber} recipientName={invoice.recipient} dueDate={invoice.dueDate} amount={invoice.amount} status={invoice.status} />  
           })
        }
    }
    


    return (
        <div className={mainCSS.bodyLight}>
                <div ref={bodyContent} className={mainCSS.bodyContent}>
                    <Header numInvoices={invoiceData.length} className="headerContainer" />
                    {returnBody()}
                </div>
        </div>
    )
}

export default Main;