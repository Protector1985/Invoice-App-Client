import "./datepickerstyle.css"
import React from 'react'
import ReactDOM from 'react-dom'
import drawerCSS from './drawer.module.css'
import Button from '../Button/Button'
import {toggleClose} from '../../../Redux/drawerSlice'
import {useSelector, useDispatch} from 'react-redux'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import {ReactComponent as Calendar} from '../../../assets/icon-calendar.svg'
import Dropdown from 'react-dropdown';
import {ReactComponent as ArrowDown} from '../../../assets/icon-arrow-down.svg'
import {ReactComponent as ArrowLeft} from '../../../assets/icon-arrow-left.svg'
import {ReactComponent as Trash} from '../../../assets/icon-delete.svg'
import style from 'react-dropdown/style.css';
import {setFromStreet, 
        setFromCity, 
        setFromZip, 
        setFromCountry, 
        setToName, 
        setToEmail, 
        setToStreet, 
        setToCity, 
        setToZip, 
        setToCountry, 
        setProjectDesc} from '../../../Redux/inputFieldsSlice'
import {addRow, editRow, deleteRow} from '../../../Redux/itemListSlice'
import {setDate, setDueIn} from "../../../Redux/dateSlice"
import { setInvoiceNumber} from '../../../Redux/invoiceNumberSlice'
import {useSubmitDataMutation} from '../../../Redux/services/invoiceDataService'
var DatePicker = require("reactstrap-date-picker");





function Drawer({open}) {
    const dispatch = useDispatch()
    const modType = useSelector((state) => state.drawerOpen.modType)
    const invoiceNumber = useSelector((state)=> state.drawerOpen.invoiceNumber)
    const invoice = useSelector((state)=> state.invoiceData.invoiceData).filter((invoice) => invoiceNumber === invoice.invoiceNumber)
    const fromStreet = useSelector((state) => state.inputFieldsSlice.fromStreet)
    const fromCity= useSelector((state) => state.inputFieldsSlice.fromCity)
    const fromZip= useSelector((state) => state.inputFieldsSlice.fromZip)
    const fromCountry= useSelector((state) => state.inputFieldsSlice.fromCountry)
    const toName= useSelector((state) => state.inputFieldsSlice.toName)
    const toEmail= useSelector((state) => state.inputFieldsSlice.toEmail)
    const toStreet = useSelector((state) => state.inputFieldsSlice.toStreet)
    const toCity = useSelector((state) => state.inputFieldsSlice.toCity)
    const toZip = useSelector((state) => state.inputFieldsSlice.toZip)
    const toCountry = useSelector((state) => state.inputFieldsSlice.toCountry)
    const toProject = useSelector((state) => state.inputFieldsSlice.toProject)
    const itemArray = useSelector((state)=> state.itemListSlice.items)
    const isoDate = useSelector((state) => state.dateSlice.ISO)
    const dueIn = useSelector((state)=> state.dateSlice.dueIn)
    
    const [submitData, {isError, isUninitialized, isLoading, isSuccess, error}] = useSubmitDataMutation()
    
    const hidden = {
        "display": "none"
    }
    const [itemsPurchased, setItemsPurchased] = React.useState([])
    const [totalContainerHeight, setTotalContainerHeight] = React.useState(0);
    
    
      function getOptions() {
        const opt = [];
        for (let i = 2 ; i <= 30 ; i ++) {
            opt.push({
                label: `Next ${i} days`,
                value: i
            })
        }
        return opt
    }


    const defaultOption = {
        label: !dueIn ? `Next 1 day` : `Next ${dueIn} days`,
        value: 1   
    }


    const totalContainerRef = React.useRef()
    

    React.useEffect(() => {
        if(invoice.length > 0) {
            setItemsPurchased(() => invoice[0].itemsPurchased)
        }    
    },[invoiceNumber])
   
    const dateRef = React.useCallback((node) => {
        if(node) {
            const dateTime = new Date(isoDate)
            const month = dateTime.toLocaleString("default", {month: "short"})
            const day = dateTime.getDate()
            const year = dateTime.getFullYear()
            node._inputRef.current.value= `${day} ${month} ${year}`
        }
    })
    
    
    function fromStreetInput(e) {
        const input = e.target.value
        const payload = {
            type: "From Street",
            fromStreet: input
        }
        dispatch(setFromStreet(payload))
    }
    
    function fromCityInput(e) {
        const input = e.target.value
        const payload = {
            type: "From City",
            fromCity: input
        }
        dispatch(setFromCity(payload))
    }

    function fromZipInput(e) {
        const input = e.target.value
        const payload = {
            type: "From Zip",
            fromZip: input
        }
        dispatch(setFromZip(payload))
    }

    function fromCountryInput(e) {
        const input = e.target.value
        const payload = {
            type: "From Country",
            fromCountry: input
        }
        dispatch(setFromCountry(payload))
    }

    function toNameInput(e) {
        const input = e.target.value
        const payload = {
            type: "To Name",
            toName: input
        }
        dispatch(setToName(payload))
    }

    function toEmailInput(e) {
        const input = e.target.value
        const payload = {
            type: "To Email",
            toEmail: input
        }
        dispatch(setToEmail(payload))
    }

    function toStreetInput(e) {
        const input = e.target.value
        const payload = {
            type: "To Street",
            toStreet: input
        }
        dispatch(setToStreet(payload))    
    }

    function toCityInput(e) {
        const input = e.target.value;
        const payload = {
            type: "To City",
            toCity: input
        }
        dispatch(setToCity(payload))   
    }

    function toZipInput(e) {
        const input = e.target.value;
        const payload = {
            type: "To Zip",
            toZip: input
        }
        dispatch(setToZip(payload))   
    }

    function toCountryInput(e) {
        const input = e.target.value;
        const payload = {
            type: "To Country",
            toCountry: input
        }
        dispatch(setToCountry(payload))   

    }

    function toProjectDesc(e) {
        const input = e.target.value;
        const payload = {
            type: "Project",
            toProject: input
        }
        dispatch(setProjectDesc(payload))   
    }

    function editItemField(e, index, type, item) {
        if(item) {
            console.log(item.qty * item.pricePerItem)
        }

        const payload = {
            type: type,
            index: index,
            value: e.target.value
        }
        dispatch(editRow(payload))
    }

    function submitDate(dateValue) {
        const dateTime = new Date(dateValue)
        const month = dateTime.toLocaleString("default", {month: "short"})
        const day = dateTime.getDate()
        const year = dateTime.getFullYear()
        const payload = {
            type: "Set Date",
            month: month,
            day: day,
            year: year,
            ISO: dateValue
        }
        dispatch(setDate(payload))
    }

    function handleDueInChange(e) {
        const dueIn = e.value

        const payload = {
            type: "DueIn", 
            value: dueIn
        }
        dispatch(setDueIn(payload))
    }

    function generateInvoiceNumber() {
        let invoiceNumber = ""
        const letterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"]
        const numbersArr = ["1","2","3","4","5","6","7","8","9"]

        for(let i = 0 ; i < 2 ; i ++) {
            invoiceNumber += letterArr[Math.floor(Math.random() * 26)]
        }
        for(let i = 0 ; i < 4 ; i ++) {
            invoiceNumber += numbersArr[Math.floor(Math.random() * 9)]
        }
        const payload = {
            type: "Set Invoice Number",
            invoiceNumber: invoiceNumber
        }
        dispatch(setInvoiceNumber(payload))
    }

    function handleRowDelete(i) {
        const payload ={
            type: "Delete Row",
            index: i
        }
        dispatch(deleteRow(payload))
    }
    

    return (
        <div style={!open ? hidden : null} className={drawerCSS.container}>
            <div className={drawerCSS.formContainer}>
            <div className={drawerCSS.formHeadline}>
            <h5>{modType}<span className={drawerCSS.hashtag}>{modType === "New Invoice" ? null : "#" }</span>{modType === "New Invoice" ? generateInvoiceNumber() : invoiceNumber}</h5>
            </div>
            
            
            <Form>
                <p className={drawerCSS.fromToHeadline}>Bill From</p>
                <FormGroup>
                    <div className={drawerCSS.fullWidthInput}>
                        <Label className={drawerCSS.fromStreetLabel} for="street">Street</Label>
                        {invoice.length === 0 ?  <Input className={drawerCSS.fromStreetInput} onChange={(e) => fromStreetInput(e)} value={fromStreet} type="text" name="street" id="street" />
                            :
                        invoice.map((data) => {
                            return <Input className={drawerCSS.fromStreetInput} value={data.fromStreet} type="text" name="street" id="street" />
                        })}
                    </div>
                    
                    <div className={drawerCSS.fromCityContainer}>
                        <Label className={drawerCSS.fromCityLabel} for="city">City</Label>
                        {invoice.length === 0 ? <Input className={drawerCSS.fromCityInput} onChange={(e) => fromCityInput(e)} value={fromCity} type="text" name="city" id="city" /> 
                            :
                        invoice.map((data) => {
                                return <Input className={drawerCSS.fromCityInput} value={data.fromCity} type="text" name="city" id="city" />
                        })}
                        
                    </div>
                    
                    <div className={drawerCSS.fromZipContainer}>
                        <Label className={drawerCSS.fromZipLabel} for="zip">Zip Code</Label>
                        {invoice.length === 0 ? <Input className={drawerCSS.fromZipInput} onChange={(e)=> fromZipInput(e)} value={fromZip} type="text" name="zip" id="zip" />
                            :
                        invoice.map((data) => {
                            return <Input className={drawerCSS.fromZipInput} value={data.fromZip} type="text" name="zip" id="zip" />
                        })}
                        
                    </div>

                    <div className={drawerCSS.fromCountryContainer}>
                        <Label className={drawerCSS.fromCountryLabel} for="country">Country</Label>
                        {invoice.length === 0 ? <Input className={drawerCSS.fromCountryInput} onChange={(e)=> fromCountryInput(e) } value={fromCountry} type="text" name="country" id="country" />
                            :
                        invoice.map((data) => {
                            return <Input className={drawerCSS.fromCountryInput} value={data.fromCountry} type="text" name="country" id="country" />
                        })}
                        
                    </div>
                    <p className={drawerCSS.fromToHeadline}>Bill To</p>
                    <div className={drawerCSS.fullWidthInput}>
                        <Label className={drawerCSS.fromStreetLabel} for="cname">Client's Name</Label>
                        {invoice.length === 0 ? <Input className={drawerCSS.fromStreetInput} onChange={(e)=> toNameInput(e) } value={toName} type="text" name="cname" id="cname" />
                            : 
                        invoice.map((data) => {
                            return <Input className={drawerCSS.fromStreetInput} value={data.recipient} type="text" name="cname" id="cname" />
                        })}
                        
                    </div>
                    <div className={drawerCSS.fullWidthInput}>
                        <Label className={drawerCSS.fromStreetLabel} for="cemail">Client's Email</Label>
                        { invoice.length === 0 ? <Input className={drawerCSS.fromStreetInput} onChange={(e)=> toEmailInput(e) } value={toEmail} type="text" name="cemail" id="cemail" />
                            : 
                        invoice.map((data) => {
                            return <Input className={drawerCSS.fromStreetInput} value={data.toEmail} type="text" name="cemail" id="cemail" />
                        })}
                        
                    </div>
                    <div className={drawerCSS.fullWidthInput}>
                        <Label className={drawerCSS.fromStreetLabel} for="streetAddress">Street Address</Label>
                        {invoice.length === 0 ? <Input className={drawerCSS.fromStreetInput} onChange={(e)=> toStreetInput(e) } value={toStreet} type="text" name="streetAddress" id="streetAddress" />
                            :
                        invoice.map((data) => {
                            return <Input className={drawerCSS.fromStreetInput} value={data.toStreet} type="text" name="streetAddress" id="streetAddress" />
                        })}
                        
                    </div>
                    <div className={drawerCSS.fromCityContainer}>
                        <Label className={drawerCSS.fromCityLabel} for="ccity">City</Label>
                        {invoice.length === 0 ? <Input className={drawerCSS.fromCityInput} onChange={(e) => toCityInput(e)} value={toCity} type="text" name="ccity" id="ccity" />
                            : 
                        invoice.map((data) => {
                            return  <Input className={drawerCSS.fromCityInput} value={data.toCity} type="text" name="ccity" id="ccity" />
                        })}
                       
                    </div>
                    
                    <div className={drawerCSS.fromZipContainer}>
                        <Label className={drawerCSS.fromZipLabel} for="czip">Zip Code</Label>
                        {invoice.length === 0 ? <Input className={drawerCSS.fromZipInput} onChange={(e) => toZipInput(e)} value={toZip} type="text" name="czip" id="czip" />
                            : 
                        invoice.map((data) => {
                            return <Input className={drawerCSS.fromZipInput} value={data.toZip} type="text" name="czip" id="czip" />
                        })}
                        
                    </div>

                    <div className={drawerCSS.fromCountryContainer}>
                        <Label className={drawerCSS.fromCountryLabel} for="ccountry">Country</Label>
                        {invoice.length === 0 ? <Input className={drawerCSS.fromCountryInput} onChange={(e)=> toCountryInput(e)} value={toCountry} type="text" name="ccountry" id="ccountry" />
                            : 
                        invoice.map((data) => {
                            return <Input className={drawerCSS.fromCountryInput} value={data.toCountry} type="text" name="ccountry" id="ccountry" />
                        })}
                        
                    </div>
                    <div className={drawerCSS.dateTerms}>
                        <div className={drawerCSS.dateTermsSubContainer}>
                            <div className={drawerCSS.dateTermsSubSubContainer}>
                                <Label className={drawerCSS.fromCountryLabel} for="datePicker">Invoice Date</Label>
                                <DatePicker ref={dateRef} onChange={(dateValue) => submitDate(dateValue)} className={drawerCSS.datePicker}  id="datePicker" />
                                <div className={drawerCSS.calendarSymbol}>
                                    <Calendar  />
                                </div>
                            </div>
                            
                            <div className={drawerCSS.dateTermsSubSubContainer}>
                            <Label className={`${drawerCSS.fromCountryLabel} subSub`} for="termPicker">Payment Terms</Label>
                            <Dropdown menuClassName={drawerCSS.dropdownMenu} controlClassName={drawerCSS.dropdownControl} style={style} options={getOptions()} onChange={(e) => handleDueInChange(e)} value={defaultOption} placeholder="Select an option" arrowClosed={<ArrowDown />} arrowOpen={<ArrowLeft/>} />
                            </div>   
                        </div>
                            
                            <div className={`${drawerCSS.fullWidthInput} ${drawerCSS.projectDescription}`}>
                                <Label className={drawerCSS.fromStreetLabel} for="pDescription">Project Description</Label>
                                {invoice.length === 0 ? <Input className={drawerCSS.fromStreetInput} onChange={(e) => toProjectDesc(e) } value={toProject} type="text" name="pDescription" id="pDescription" />
                                    : 
                                invoice.map((data)=> {
                                    return <Input className={drawerCSS.fromStreetInput} value={data.overallProject} type="text" name="pDescription" id="pDescription" />
                                })}
                                
                            </div>
                        <div className={drawerCSS.addDeleteContainer}>
                            <h5 className={drawerCSS.itemListHeadline}>Item List</h5>
                            <div className={drawerCSS.itemListDescriptions}>
                                <div className={drawerCSS.headlineContainer}>
                                    <div className={drawerCSS.iNameContainer}>
                                        <Label className={drawerCSS.itemListDesc} for="iName">Item Name</Label>
                                        {invoice.length === 0 ? 
                                            itemArray.map((item, index) => <Input className={`${drawerCSS.iDataInput} ${drawerCSS.totalAmountDarkText}`} onChange={ (e) => editItemField(e, index, "description") } value={item.description} type="text" name="iName" id="iName" />)
                                            :

                                            itemsPurchased.map((workItem) => <Input className={`${drawerCSS.iDataInput} ${drawerCSS.totalAmountDarkText}`} value={workItem.description} type="text" name="iName" id="iName" />)}
                                        
                                    </div>
                                    <div className={drawerCSS.qtyContainer}>
                                        <Label className={drawerCSS.itemListDesc} for="qty">Qty.</Label>
                                        {invoice.length === 0 ? 
                                        itemArray.map((item, index) => <Input className={`${drawerCSS.iDataInput} ${drawerCSS.totalAmountDarkText}`} onChange={ (e) => editItemField(e, index, "qty") } value={!isNaN(item.qty) ? item.qty : ""} type="text" name="qty" id="qty" />)
                                            :
                                        itemsPurchased.map((workItem) => <Input className={`${drawerCSS.iDataInput} ${drawerCSS.totalAmountDarkText}`} value={workItem.qty} type="text" name="qty" id="qty" />)}
                                        
                                    </div>
                                    <div className={drawerCSS.priceContainer}>
                                        <Label className={drawerCSS.itemListDesc} for="price">Price</Label>
                                        { invoice.length === 0 ? 
                                            itemArray.map((item, index) => <Input className={`${drawerCSS.iDataInput} ${drawerCSS.totalAmountDarkText}`} onChange={ (e) => editItemField(e, index, "pricePerItem") } value={!isNaN(item.pricePerItem) ? item.pricePerItem : ""} type="text" name="price" id="price" />)
                                            :
                                            itemsPurchased.map((workItem) => <Input className={`${drawerCSS.iDataInput} ${drawerCSS.totalAmountDarkText}`} value={workItem.pricePerItem.toFixed(2)} type="text" name="pricePerItem" id="pricePerItem" />)}
                                        
                                    </div>
                                    <div ref={totalContainerRef} className={drawerCSS.totalContainer}>
                                        <Label className={drawerCSS.itemListDesc}>Total</Label>
                                        {invoice.length === 0 ? 
                                            itemArray.map((item, index) => <Input className={`${drawerCSS.iDataInput} ${drawerCSS.totalAmountLightText} ${drawerCSS.removeBorder}`} onChange={ (e) => editItemField(e, index, "total") }  value={ !isNaN(Number(item.qty) * Number(item.pricePerItem)) ? (Number(item.qty) * Number(item.pricePerItem)).toFixed(2) : "0.00"} type="text" name="total" id="total" />)
                                            :
                                            itemsPurchased.map((workItem) => <Input className={`${drawerCSS.iDataInput} ${drawerCSS.totalAmountLightText} ${drawerCSS.removeBorder}`}  value={(workItem.qty * workItem.pricePerItem).toFixed(2)} type="text" name="total" id="total" /> )}
                                        
                                    </div>
                                    <div className={drawerCSS.trashSymbolContainer}>
                                    
                                    {invoice.length === 0 ? 
                                        itemArray.map((_, index) => {
                                            return (
                                            <div className={drawerCSS.svgContainer}>
                                                <h4> </h4>
                                                <span className={drawerCSS.trashSymbol}><Trash onClick={()=> handleRowDelete(index)} /> </span> 
                                            </div>
                                             
                                            )
                                        })
                                        :
                                        
                                        itemsPurchased.map((workItem, index) => {
                                        return (
                                            <div className={drawerCSS.svgContainer}>
                                                <h4> </h4>
                                                <span className={drawerCSS.trashSymbol}><Trash onClick={()=> handleRowDelete(index)} /> </span> 
                                            </div>
                                             
                                        )
                                    })}
                                        
                                          
                                    </div>
                                    
                                </div>
                                
                                
                            </div>
                        </div>
                        
                    </div>
                    
                </FormGroup>
            
            </Form>
            <Button className={drawerCSS.addRowBtn} description="AddRow" mode="light" type={6} clicked={addRow} />
            <div className={drawerCSS.btnContainer}>
                <Button className={drawerCSS.btn} description="Cancel" mode="light" type={3} clicked={toggleClose} />
                <Button className={drawerCSS.rightButton} clicked={submitData} description="Save as Draft" mode="light" type={4} specialAlign={{property: "marginLeft", value: "auto"}} />
                <Button clicked={submitData} description="Save & Send" mode="light" type={2}  />
            </div> 
            </div>
        </div> 
    )
}

export default Drawer;
