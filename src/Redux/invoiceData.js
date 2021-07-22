const invoiceData = [

    {
    invoiceNumber:"RT3080", 
    invoiceDate: "10 Aug 2021" ,
    dueDate: "19 Aug 2021", 
    recipient: "Jensen Huang", 
    itemsPurchased: [
        {description:"Banner Design", qty: 4, pricePerItem: 1080, total: 0}
    ],
    amount: "$1,080.90", 
    status: "PAID", 
    service: "Graphic Design", 
    street: "Ganghoferstr. 8", 
    city: "Speichersdorf", 
    zip: "95469", 
    country: "Germany",
    email: "besttest@test.com"
},
    {
        invoiceNumber:"XM9141", 
        invoiceDate: "10 Sep 2021" ,
        dueDate: "20 Sep 2021", 
        recipient: "Alex Grim", 
        itemsPurchased: [
            {description:"Page Design", qty: 2, pricePerItem: 280.60, total: 0},
            {description:"Frontend Development", qty: 2, pricePerItem: 5000.45, total: 0},
            {description:"Logo Design", qty: 2, pricePerItem: 150.62, total: 0},
            {description:"Backend Development", qty: 2, pricePerItem: 5000.45, total: 0},
        ],
        amount: "$556.00", 
        status: "PENDING", 
        service: "Web Development", 
        street: "5960 Juniper Court", 
        city: "Simi Valley", 
        zip: "93063", 
        country: "USA",
        email: "test@test.com",
    },
    {
        invoiceNumber:"FV2353", 
        invoiceDate: "02 Nov 2021" ,
        dueDate: "12 Nov 2021", 
        recipient: "Anita Wainwright", 
        itemsPurchased: [
            {description:"Node Server Development", qty: 1, pricePerItem: 5000, total: 0},
        ],
        amount: "$5,000.00", 
        status: "DRAFT", 
        service: "Backend Development", 
        street: "3401 Grande Vista Dr #19097", 
        city: "Newbury Park", 
        zip: "91320", 
        country: "USA",
        email: "yeees@yes.com"
    },
]



export default invoiceData;