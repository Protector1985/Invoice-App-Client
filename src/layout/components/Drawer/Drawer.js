import "./datepickerstyle.css"
import React from 'react'
import ReactDOM from 'react-dom'
import drawerCSS from './drawer.module.css'
import Button from '../Button/Button'
import {toggleClose} from '../../../Redux/drawerSlice'
import {useSelector} from 'react-redux'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import {ReactComponent as Calendar} from '../../../assets/icon-calendar.svg'
import Dropdown from 'react-dropdown';
import {ReactComponent as ArrowDown} from '../../../assets/icon-arrow-down.svg'
import {ReactComponent as ArrowLeft} from '../../../assets/icon-arrow-left.svg'
import {ReactComponent as Trash} from '../../../assets/icon-delete.svg'
import style from 'react-dropdown/style.css';
import Logo from '../../../assets/image-avatar.jpg'
var DatePicker = require("reactstrap-date-picker");





function Drawer({open}) {

    const options = [
        'Next 30 days', 'Next 14 days', 'Next 7 days'
      ];

    const defaultOption = options[0];
    const modType = useSelector((state) => state.drawerOpen.modType)
    const invoiceNumber = useSelector((state)=> state.drawerOpen.invoiceNumber)
    const invoice = useSelector((state)=> state.invoiceData.invoiceData).filter((invoice) => invoiceNumber === invoice.invoiceNumber)
    console.log("rendered " + invoice)
    const hidden = {
        "display": "none"
    }
   
    
   
    
    

    return (
        <div style={!open ? hidden : null} className={drawerCSS.container}>
            <div className={drawerCSS.formContainer}>
            <h5>{modType}<span>#</span>{invoiceNumber}</h5>
            
            <Form>
                <p className={drawerCSS.fromToHeadline}>Bill From</p>
                <FormGroup>
                    <div className={drawerCSS.fullWidthInput}>
                        <Label className={drawerCSS.fromStreetLabel} for="street">Street</Label>
                        {invoice.map((data) => {
                            return <Input className={drawerCSS.fromStreetInput} value={data.fromStreet} type="text" name="street" id="street" />
                        })}
                    </div>
                    
                    <div className={drawerCSS.fromCityContainer}>
                        <Label className={drawerCSS.fromCityLabel} for="city">City</Label>
                        {invoice.map((data) => {
                            return <Input className={drawerCSS.fromCityInput} value={data.fromCity} type="text" name="city" id="city" />
                        })}
                        
                    </div>
                    
                    <div className={drawerCSS.fromZipContainer}>
                        <Label className={drawerCSS.fromZipLabel} for="zip">Zip Code</Label>
                        {invoice.map((data) => {
                            return <Input className={drawerCSS.fromZipInput} value={data.fromZip} type="text" name="zip" id="zip" />
                        })}
                        
                    </div>

                    <div className={drawerCSS.fromCountryContainer}>
                        <Label className={drawerCSS.fromCountryLabel} for="country">Country</Label>
                        {invoice.map((data) => {
                            return <Input className={drawerCSS.fromCountryInput} value={data.fromCountry} type="text" name="country" id="country" />
                        })}
                        
                    </div>
                    <p className={drawerCSS.fromToHeadline}>Bill To</p>
                    <div className={drawerCSS.fullWidthInput}>
                        <Label className={drawerCSS.fromStreetLabel} for="cname">Client's Name</Label>
                        {invoice.map((data) => {
                            return <Input className={drawerCSS.fromStreetInput} value={data.recipient} type="text" name="cname" id="cname" />
                        })}
                        
                    </div>
                    <div className={drawerCSS.fullWidthInput}>
                        <Label className={drawerCSS.fromStreetLabel} for="cemail">Client's Email</Label>
                        {invoice.map((data) => {
                            return <Input className={drawerCSS.fromStreetInput} value={data.toEmail} type="text" name="cemail" id="cemail" />
                        })}
                        
                    </div>
                    <div className={drawerCSS.fullWidthInput}>
                        <Label className={drawerCSS.fromStreetLabel} for="streetAddress">Street Address</Label>
                        {invoice.map((data) => {
                            return <Input className={drawerCSS.fromStreetInput} value={data.toStreet} type="text" name="streetAddress" id="streetAddress" />
                        })}
                        
                    </div>
                    <div className={drawerCSS.fromCityContainer}>
                        <Label className={drawerCSS.fromCityLabel} for="ccity">City</Label>
                        {invoice.map((data) => {
                            return  <Input className={drawerCSS.fromCityInput} value={data.toCity} type="text" name="ccity" id="ccity" />
                        })}
                       
                    </div>
                    
                    <div className={drawerCSS.fromZipContainer}>
                        <Label className={drawerCSS.fromZipLabel} for="czip">Zip Code</Label>
                        {invoice.map((data) => {
                            return <Input className={drawerCSS.fromZipInput} value={data.toZip} type="text" name="czip" id="czip" />
                        })}
                        
                    </div>

                    <div className={drawerCSS.fromCountryContainer}>
                        <Label className={drawerCSS.fromCountryLabel} for="ccountry">Country</Label>
                        {invoice.map((data) => {
                            return <Input className={drawerCSS.fromCountryInput} value={data.toCountry} type="text" name="ccountry" id="ccountry" />
                        })}
                        
                    </div>
                    <div className={drawerCSS.dateTerms}>
                        <div className={drawerCSS.dateTermsSubContainer}>
                            <div className={drawerCSS.dateTermsSubSubContainer}>
                                <Label className={drawerCSS.fromCountryLabel} for="datePicker">Invoice Date</Label>
                                <DatePicker className={drawerCSS.datePicker}  id="datePicker" />
                                <div className={drawerCSS.calendarSymbol}>
                                    <Calendar  />
                                </div>
                            </div>
                            
                            <div className={drawerCSS.dateTermsSubSubContainer}>
                            <Label className={`${drawerCSS.fromCountryLabel} subSub`} for="termPicker">Payment Terms</Label>
                            <Dropdown menuClassName={drawerCSS.dropdownMenu} controlClassName={drawerCSS.dropdownControl} style={style}  options={options} value={defaultOption} placeholder="Select an option" arrowClosed={<ArrowDown />} arrowOpen={<ArrowLeft/>} />
                            </div>   
                        </div>
                            
                            <div className={`${drawerCSS.fullWidthInput} ${drawerCSS.projectDescription}`}>
                                <Label className={drawerCSS.fromStreetLabel} for="pDescription">Project Description</Label>
                                <Input className={drawerCSS.fromStreetInput} type="text" name="pDescription" id="pDescription" />
                            </div>
                        <div className={drawerCSS.addDeleteContainer}>
                            <h5 className={drawerCSS.itemListHeadline}>Item List</h5>
                            <div className={drawerCSS.itemListDescriptions}>
                                <div className={drawerCSS.headlineContainer}>
                                    <div className={drawerCSS.iNameContainer}>
                                        <Label className={drawerCSS.itemListDesc} for="iName">Item Name</Label>
                                        <Input className={drawerCSS.iDataInput} type="text" name="iName" id="iName" />
                                    </div>
                                    <div className={drawerCSS.qtyContainer}>
                                        <Label className={drawerCSS.itemListDesc} for="qty">Qty.</Label>
                                        <Input className={drawerCSS.iDataInput} type="text" name="qty" id="qty" />
                                    </div>
                                    <div className={drawerCSS.priceContainer}>
                                        <Label className={drawerCSS.itemListDesc} for="price">Price</Label>
                                        <Input className={drawerCSS.iDataInput} type="text" name="price" id="price" />
                                    </div>
                                    <div className={drawerCSS.totalContainer}>
                                        <Label className={drawerCSS.itemListDesc}>Total</Label>
                                        <div className={drawerCSS.totalAmountContainer}>
                                            <h5 className={drawerCSS.totalAmount}>159.00</h5>
                                        </div>
                                    </div>
                                    <div className={drawerCSS.trashSymbolContainer}>
                                        <h4> </h4>
                                        <span className={drawerCSS.trashSymbol}><Trash /> </span>    
                                    </div>
                                    
                                </div>
                                
                                
                            </div>
                        </div>
                        
                    </div>
                </FormGroup>
            
            </Form>
            <div className={drawerCSS.btnContainer}>
                <Button className={drawerCSS.btn} description="Cancel" mode="light" type={3} clicked={toggleClose} />
                <Button description="Submit" mode="light" type={2}  />
            </div>
            </div>
        </div> 
    )
}

export default Drawer;
