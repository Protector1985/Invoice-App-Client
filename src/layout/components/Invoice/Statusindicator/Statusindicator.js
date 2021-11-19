import React from 'react'
import indicatorCSS from './statusindicator.module.css'
import indicatorDarkCSS from './statusindicatorDark.module.css'
import {Spinner} from 'reactstrap'
import {useSelector} from 'react-redux'

function Statusindicator({status, styleProp}) {
    const darkMode = useSelector((state) => state.themeSlice.darkMode)
    function returnClassStyling() {
        switch (status) {
            case "PAID":
                return {
                    descriptor: "Paid",
                    containerColor: darkMode ? indicatorDarkCSS.greenContainer : indicatorCSS.greenContainer,
                    circleColor: darkMode ? indicatorDarkCSS.greenCircle : indicatorCSS.greenCircle,
                    statusColor: darkMode ? indicatorDarkCSS.greenStatus : indicatorCSS.greenStatus
                }
            case "PENDING":
                return {
                    descriptor: "Pending",
                    containerColor: darkMode ? indicatorDarkCSS.orangeContainer : indicatorCSS.orangeContainer,
                    circleColor: darkMode ? indicatorDarkCSS.orangeCircle : indicatorCSS.orangeCircle,
                    statusColor: darkMode ? indicatorDarkCSS.orangeStatus : indicatorCSS.orangeStatus
                }
            case "DRAFT":
                return {
                    descriptor: "Draft",
                    containerColor: darkMode ? indicatorDarkCSS.greyContainer : indicatorCSS.greyContainer,
                    circleColor: darkMode ? indicatorDarkCSS.greyCircle : indicatorCSS.greyCircle,
                    statusColor: darkMode ? indicatorDarkCSS.greyStatus : indicatorCSS.greyStatus
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
                    <div className={`${styleProp === "NORMAL" ? indicatorCSS.containerNormal : indicatorCSS.container} ${returnClassStyling().containerColor}`}>
                        <div className={`${indicatorCSS.circle} ${returnClassStyling().circleColor}` }></div>
                        <p className={`${indicatorCSS.status} ${returnClassStyling().statusColor}`}>{returnClassStyling().descriptor}</p>
                    </div>
                    )
            case "PENDING" :
                return (
                    <div className={`${styleProp === "NORMAL" ? indicatorCSS.containerNormal : indicatorCSS.container} ${returnClassStyling().containerColor}`}>
                        <div className={`${indicatorCSS.circle} ${returnClassStyling().circleColor}` }></div>
                        <p className={`${indicatorCSS.status} ${returnClassStyling().statusColor}`}>{returnClassStyling().descriptor}</p>
                    </div>
                    )
            case  "PAID" :
                return (
                    <div className={`${styleProp === "NORMAL" ? indicatorCSS.containerNormal : indicatorCSS.container} ${returnClassStyling().containerColor}`}>
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