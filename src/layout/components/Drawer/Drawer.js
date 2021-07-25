import "./datepickerstyle.css"
import React from 'react'
import drawerCSS from './drawer.module.css'
import Button from '../Button/Button'
import {toggleClose} from '../../../Redux/drawerSlice'
import {useSelector} from 'react-redux'
import { Form, FormGroup, Input, Label } from 'reactstrap'
var DatePicker = require("reactstrap-date-picker");




function Drawer({open}) {

    const modType = useSelector((state) => state.drawerOpen.modType)
    const invoiceNumber = useSelector((state)=> state.drawerOpen.invoiceNumber)
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
                    <div className={drawerCSS.fromStreetContainer}>
                        <Label className={drawerCSS.fromStreetLabel} for="street">Street</Label>
                        <Input className={drawerCSS.fromStreetInput} type="text" name="street" id="street" />
                    </div>
                    
                    <div className={drawerCSS.fromCityContainer}>
                        <Label className={drawerCSS.fromCityLabel} for="city">City</Label>
                        <Input className={drawerCSS.fromCityInput} type="text" name="city" id="city" />
                    </div>
                    
                    <div className={drawerCSS.fromZipContainer}>
                        <Label className={drawerCSS.fromZipLabel} for="zip">Zip Code</Label>
                        <Input className={drawerCSS.fromZipInput} type="text" name="zip" id="zip" />
                    </div>

                    <div className={drawerCSS.fromCountryContainer}>
                        <Label className={drawerCSS.fromCountryLabel} for="country">Country</Label>
                        <Input className={drawerCSS.fromCountryInput} type="text" name="country" id="country" />
                    </div>
                    <p className={drawerCSS.fromToHeadline}>Bill To</p>
                    <div className={drawerCSS.fromStreetContainer}>
                        <Label className={drawerCSS.fromStreetLabel} for="cname">Client's Name</Label>
                        <Input className={drawerCSS.fromStreetInput} type="text" name="cname" id="cname" />
                    </div>
                    <div className={drawerCSS.fromStreetContainer}>
                        <Label className={drawerCSS.fromStreetLabel} for="cemail">Client's Email</Label>
                        <Input className={drawerCSS.fromStreetInput} type="text" name="cemail" id="cemail" />
                    </div>
                    <div className={drawerCSS.fromStreetContainer}>
                        <Label className={drawerCSS.fromStreetLabel} for="streetAddress">Street Address</Label>
                        <Input className={drawerCSS.fromStreetInput} type="text" name="streetAddress" id="streetAddress" />
                    </div>
                    <div className={drawerCSS.fromCityContainer}>
                        <Label className={drawerCSS.fromCityLabel} for="ccity">City</Label>
                        <Input className={drawerCSS.fromCityInput} type="text" name="ccity" id="ccity" />
                    </div>
                    
                    <div className={drawerCSS.fromZipContainer}>
                        <Label className={drawerCSS.fromZipLabel} for="czip">Zip Code</Label>
                        <Input className={drawerCSS.fromZipInput} type="text" name="czip" id="czip" />
                    </div>

                    <div className={drawerCSS.fromCountryContainer}>
                        <Label className={drawerCSS.fromCountryLabel} for="ccountry">Country</Label>
                        <Input className={drawerCSS.fromCountryInput} type="text" name="ccountry" id="ccountry" />
                    </div>
                    <div className={drawerCSS.dateTerms}>
                        <Label className={drawerCSS.fromCountryLabel} for="datePicker">Invoice Date</Label>
                        <DatePicker className={drawerCSS.datePicker} id="datePicker" />
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
