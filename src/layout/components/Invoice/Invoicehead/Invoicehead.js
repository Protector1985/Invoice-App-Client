import React from 'react'
import invoiceheadCSS from './invoicehead.module.css'
import Statusindicator from '../Statusindicator/Statusindicator'
import Button from '../../Button/Button'

function Invoicehead() {
    return (
        <div className={invoiceheadCSS.container}>
                <p className={invoiceheadCSS.statusText}>Status</p>
                <Statusindicator status="PAID" />
            <div className={invoiceheadCSS.btnContainer}>
                <Button description="Edit" mode="light" type={3} />
                <Button description="Delete" mode="light" type={5} />
                <Button description="Mark as Paid" mode="light" type={2} />
            </div>
        </div>
    )
}

export default Invoicehead;