import React from 'react'
import indicatorCSS from './statusindicator.module.css'

function Statusindicator({status}) {


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
        }
    }
    
    

    return (
        <div className={`${indicatorCSS.container} ${returnClassStyling().containerColor}`}>
            <div className={`${indicatorCSS.circle} ${returnClassStyling().circleColor}` }></div>
            <p className={`${indicatorCSS.status} ${returnClassStyling().statusColor}`}>{returnClassStyling().descriptor}</p>
        </div>
    )
}

export default Statusindicator;