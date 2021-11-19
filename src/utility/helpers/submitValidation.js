

export default function submitValidation(body) {
    const itemArrayIndexErrors = []
    const emptyFieldErrors = {
        fromStreet: "NO_ERROR",
        fromCity: "NO_ERROR",
        fromZip: "NO_ERROR",
        fromCountry: "NO_ERROR",
        toName: "NO_ERROR",
        toEmail:"NO_ERROR",
        toStreet: "NO_ERROR",
        toCity: "NO_ERROR",
        toZip: "NO_ERROR",
        toCountry: "NO_ERROR", 
        toProject: "NO_ERROR",
        isoDate: "NO_ERROR",
    }
    let numFieldErrors = 0;
    
    for(const field in body) {
        const regExp = /[a-zA-Z0-9]/g
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let str = String(body[field])
        const emailString = String(body.toEmail)
        if(body[field] !== undefined) {
            if(regExp.test(str) === false ) {
                emptyFieldErrors[field] = "ERROR"
                numFieldErrors +=1
            } else if( emailRegex.test(emailString) === false) {
                emptyFieldErrors.toEmail = "ERROR"
                numFieldErrors +=1
            }
        }  
        
    }

    for(let i = 0 ; i < body.itemArray.length ; i ++) {
        const regExp = /[a-zA-Z0-9]/g
        const description = String(body.itemArray[i].description)
        const qty = String(body.itemArray[i].qty)
        const pricePerItem = String(body.itemArray[i].pricePerItem)
        const total = String(body.itemArray[i].total)
       
        if(regExp.test(qty) === false ) {
            itemArrayIndexErrors.push(i)
        } else if(regExp.test(description) === false) {
            itemArrayIndexErrors.push(i)
        } else if(regExp.test(pricePerItem) === false) {
            itemArrayIndexErrors.push(i)
        }
    }

        return {
            itemArrayIndexErrors: itemArrayIndexErrors,
            emptyFieldErrors: emptyFieldErrors,
            numFieldErrors: numFieldErrors
        }
}