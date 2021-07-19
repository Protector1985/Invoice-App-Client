import React from 'react'
import Header from './header/Header'
import mainCSS from './main.module.css'
import Invoice from '../Invoice/Invoice'

function Main() {
    return (
        <div className={mainCSS.bodyLight}>
            <div className={mainCSS.bodyContent}>
                <Header className="headerContainer" />
                <Invoice />
                <Invoice />
                <Invoice />

            </div>
           
        </div>
    )
}

export default Main;