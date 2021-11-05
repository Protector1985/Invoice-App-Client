import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header/Header'
import mainCSS from './main.module.css'
import Invoice from '../Invoice/Invoice'
import getNodeSizeCB from '../../../utility/sizing/getNodeSizeCB'
import {ReactComponent as EmptyPic} from '../../../assets/illustration-empty.svg'
import { useSelector, useDispatch } from 'react-redux'
import {Spinner} from 'reactstrap'
import Drawer from '../Drawer/Drawer'
// import axios from 'axios'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {useGetAllInvoicesQuery} from '../../../Redux/services/invoiceDataService'
import {SocketContext} from '../../../context/socket'



function Main(props) {
    const socket = React.useContext(SocketContext)
    const {drawerOpen} = useSelector((state)=> state.drawerOpen)
    const bodyContent = React.useCallback((node) => {
        getNodeSizeCB(node, "invoice_invoiceNumber__O8Yds");
        getNodeSizeCB(node, "invoice_recipientData__1RWck" );
        getNodeSizeCB(node, "invoice_amount__1U-gr");
        getNodeSizeCB(node, "invoice_recipientName__adE_o");
    })
    const [fetchController, setFetchController] = React.useState("")
        let { data = [], refetch, error, isLoading} = useGetAllInvoicesQuery('fetchAll')
        
        socket.on("FETCH_ALL", (data) => {
            setFetchController(data)
        })

        React.useEffect(() => {
            console.log("REEEEEEFEEETCH")
            refetch()
        }, [fetchController])
    console.log("FETCH CONTROLLER MAIN")

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
                return  <Invoice refetchInvoice={refetch} key={invoice.invoiceNumber} month={invoice.invoiceDateMonth} day={invoice.invoiceDateDay} year={invoice.invoiceDateYear} index={index} itemsPurchased={invoice.itemsPurchased} invoiceNumber={invoice.invoiceNumber} recipientName={invoice.recipient} dueDate={invoice.dueDate} amount={invoice.amount} status={invoice.status} />
                
                
            })
            

        }
            
    }



    return (
        <div className={mainCSS.bodyLight}>
            <Drawer refetch={refetch} open={drawerOpen} />
                <div ref={bodyContent} className={mainCSS.bodyContent}>
                    <Header refetch={refetch} key="pageHeader" numInvoices={data.length} className="headerContainer" />
                    {returnBody()}
                </div>
        </div>
    )
}

export default Main;