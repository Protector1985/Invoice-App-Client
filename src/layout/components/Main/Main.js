import React from 'react'
import Header from './header/Header'
import mainCSS from './main.module.css'
import Invoice from '../Invoice/Invoice'

function Main() {
    const [invoiceData, setInvoiceData] = React.useState([
        {invoiceNumber:"#RT3080", dueDate: "Due  19 Aug 2021", recipient: "Jensen Huang", amount: "$ 1,080.90", status: "PAID"},
        {invoiceNumber:"#XM9141", dueDate: "Due  20 Sep 2021", recipient: "Alex Grim", amount: "$ 556.00", status: "PENDING"},
        {invoiceNumber:"#FV2353", dueDate: "Due  12 Nov 2021", recipient: "Anita Wainwright", amount: "$ £ 3,102.04", status: "DRAFT"},
    ])


    return (
        <div className={mainCSS.bodyLight}>
            <div className={mainCSS.bodyContent}>
                <Header className="headerContainer" />
                {invoiceData.map((invoice) => <Invoice invoiceNumber={invoice.invoiceNumber} recipientName={invoice.recipient} dueDate={invoice.dueDate} amount={invoice.amount} status={invoice.status} />)}
            </div>
           
        </div>
    )
}

export default Main;