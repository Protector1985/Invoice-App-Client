import React from 'react'
import indicatorCSS from './statusindicator.module.css'
import {Spinner} from 'reactstrap'

function Statusindicator({status}) {
    console.log(status)
    function returnClassStyling() {
        switch (status) {
            case "PAID":
                return {
                    descriptor: "Paid",
                    containerColor: indicatorCSS.greenContainer,
                    circleColor: indicatorCSS.greenCircle,
                    statusColor: indicatorCSS.greenStatus
                }
            case "PENDING":
                return {
                    descriptor: "Pending",
                    containerColor: indicatorCSS.orangeContainer,
                    circleColor: indicatorCSS.orangeCircle,
                    statusColor: indicatorCSS.orangeStatus
                }
            case "DRAFT":
                return {
                    descriptor: "Draft",
                    containerColor: indicatorCSS.greyContainer,
                    circleColor: indicatorCSS.greyCircle,
                    statusColor: indicatorCSS.greyStatus
                }
                
            case "IS_LOADING" :
                return {
                    descriptor: "Is Loading",
                    containerColor: indicatorCSS.greyContainer,
                    circleColor: indicatorCSS.greyCircle,
                    statusColor: indicatorCSS.greyStatus
                }
        }
    }

    
    function returnHtml() {
        switch (status) {
            case undefined:
                return <Spinner />
                
            case "DRAFT" || "PENDING" || "PAID" :
                return (
                    <div className={`${indicatorCSS.container} ${returnClassStyling().containerColor}`}>
                        <div className={`${indicatorCSS.circle} ${returnClassStyling().circleColor}` }></div>
                        <p className={`${indicatorCSS.status} ${returnClassStyling().statusColor}`}>{returnClassStyling().descriptor}</p>
                    </div>
                    )
            case "PENDING" :
                return (
                    <div className={`${indicatorCSS.container} ${returnClassStyling().containerColor}`}>
                        <div className={`${indicatorCSS.circle} ${returnClassStyling().circleColor}` }></div>
                        <p className={`${indicatorCSS.status} ${returnClassStyling().statusColor}`}>{returnClassStyling().descriptor}</p>
                    </div>
                    )
            case  "PAID" :
                return (
                    <div className={`${indicatorCSS.container} ${returnClassStyling().containerColor}`}>
                        <div className={`${indicatorCSS.circle} ${returnClassStyling().circleColor}` }></div>
                        <p className={`${indicatorCSS.status} ${returnClassStyling().statusColor}`}>{returnClassStyling().descriptor}</p>
                    </div>
                    )
            case "IS_LOADING" :
                return <Spinner />
                }
                
        
    }
    

    return returnHtml()
}

export default Statusindicator;