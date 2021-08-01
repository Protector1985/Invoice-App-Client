
const daysPerMonth = [
    {key:"Jan", days: 31, ind: 0},
    {key:"Feb", days: 30, ind: 1},
    {key: "Mar", days: 31, ind: 2},
    {key:"Apr", days: 30, ind:3},
    {key:"May", days: 31, ind: 4},
    {key:"Jun", days: 30, ind: 5},
    {key:"Jul", days: 31, ind: 6},
    {key:"Aug", days: 31, ind: 7},
    {key:"Sep", days: 30, ind: 8},
    {key:"Oct", days: 31, ind: 9},
    {key:"Nov", days: 30, ind: 10},
    {key:"Dec", days: 31, ind: 11},
]




function getDueDate(dueIn, invoiceDay, invoiceYear, monthIdentifier) {
    let day = 0;
    let dta = daysPerMonth.filter((item) => item.key === monthIdentifier)
    const dataSet = dta[0]
    if(invoiceDay <= 31) {
        if(dueIn + invoiceDay > dataSet.days && monthIdentifier !== "Dec") {
            const difference = dataSet.days - invoiceDay
            const dueDay = dueIn - difference
            return {
                dueDay:dueDay,
                dueMonth: daysPerMonth[dataSet.ind + 1].key,
                dueYear: invoiceYear
            }
        } else if(dueIn + invoiceDay > dataSet.days && monthIdentifier === "Dec")  {
            const difference = dataSet.days - invoiceDay
            const dueDay = dueIn - difference
            return {
                dueDay:dueDay,
                dueMonth: "Jan",
                dueYear: invoiceYear + 1
            }
        } else if(dueIn + invoiceDay < dataSet.days) {
            return {
                dueDay: dueIn + invoiceDay,
                dueMonth: dataSet.key,
                dueYear: invoiceYear
            }
        }

    } else {
        return {
                dueDay: "INVALID DATE RANGE",
                dueMonth: "INVALID DATE RANGE",
                dueYear: "INVALID DATE RANGE"
        }
    }
       

}



export default getDueDate;