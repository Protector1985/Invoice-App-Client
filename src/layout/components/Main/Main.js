import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header/Header'
import mainCSS from './main.module.css'
import Invoice from '../Invoice/Invoice'
import getNodeSizeCB from '../../../utility/sizing/getNodeSizeCB'
import {ReactComponent as EmptyPic} from '../../../assets/illustration-empty.svg'
import { useSelector, useDispatch } from 'react-redux'
import Drawer from '../Drawer/Drawer'
// import axios from 'axios'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {useGetAllInvoicesQuery} from '../../../Redux/services/invoiceDataService'



function Main(props) {
    const {invoiceData}  = useSelector((state) => state.invoiceData)
    
    let { data, error, isLoading} = useGetAllInvoicesQuery('fetchAll')
   
    const {drawerOpen} = useSelector((state)=> state.drawerOpen)
    const bodyContent = React.useCallback((node) => {
        getNodeSizeCB(node, "invoice_invoiceNumber__O8Yds");
        getNodeSizeCB(node, "invoice_recipientData__1RWck" );
        getNodeSizeCB(node, "invoice_amount__1U-gr");
        getNodeSizeCB(node, "invoice_recipientName__adE_o");
    })

    

    // useDeepCompareEffect(() => {
    //     axios.get("/invoice/fetchAll")
    //         .then((res) => {
    //             const invoices = res.data;
    //             console.log(invoices)
    //             setInvoiceData(invoices)
    //         })
    // }, [invoiceData])

  
    

    function returnBody() {
        
            if(data.length === 0) {
                return (
                    <div className={mainCSS.emptyBody}>
                        <EmptyPic />
                        <h3 className={mainCSS.emptyHeadline}>There is nothing here</h3>
                        <p className={mainCSS.emptyText}>  Create an invoice by clicking the <br/> <span style={{"fontWeight": "bold"}}>New Invoice</span> button and get started</p>
                    </div>
                ) 
            } else {
            return data.map((invoice, index) => {
                return <Invoice key={invoice.invoiceNumber} month={invoice.invoiceDateMonth} day={invoice.invoiceDateDay} year={invoice.invoiceDateYear} index={index} itemsPurchased={invoice.itemsPurchased} invoiceNumber={invoice.invoiceNumber} recipientName={invoice.recipient} dueDate={invoice.dueDate} amount={invoice.amount} status={invoice.status} />
                
                
            })
            

        }
            
    }
    
    console.log(data)
    console.log(isLoading)
    


    return (
        <div className={mainCSS.bodyLight}>
            <Drawer open={drawerOpen} />
                <div ref={bodyContent} className={mainCSS.bodyContent}>
                    <Header key="pageHeader" numInvoices={data.length} className="headerContainer" />
                    {returnBody()}
                </div>
        </div>
    )
}

export default Main;