const invoiceData = [

    {
    invoiceNumber:"RT3080", 
    invoiceDateMonth: "Jul",
    invoiceDateDay: 8,
    invoiceDateYear: 2021,
    dueIn: 30,
    dueDate: "19 Aug 2021", 
    recipient: "Jensen Huang", 
    overallProject: "Design",
    itemsPurchased: [
        {description:"Banner Design", qty: 4, pricePerItem: 1080, total: 0}
    ],
    amount: "$1,080.90", 
    status: "PAID", 
    service: "Graphic Design", 
    fromStreet: "5960 Juniper Court", 
    fromCity: "Simi Valley", 
    fromZip: "93063", 
    fromCountry: "USA",
    toStreet: "Ganghoferstr. 8",
    toCity: "Speichersdorf",
    toZip: "95469",
    toCountry: "Germany",
    toEmail: "besttest@test.com"
},
    {
        invoiceNumber:"XM9141",
        invoiceDateMonth: "Feb",
        invoiceDateDay: 1,
        invoiceDateYear: 2019,
        dueIn: 10,
        dueDate: "20 Sep 2021", 
        recipient: "Alex Grim",
        overallProject: "Full Stack Development", 
        toEmail: "michaelrbraun1985@gmail.com",
        itemsPurchased: [
            {description:"Page Design", qty: 2, pricePerItem: 280.60, total: 0},{description:"Frontend Development", qty: 2, pricePerItem: 5000.45, total: 0},
            {description:"Logo Design", qty: 2, pricePerItem: 150.62, total: 0},
            {description:"Page Design", qty: 2, pricePerItem: 280.60, total: 0},
            {description:"Ogliiii Design", qty: 20, pricePerItem: 150.62, total: 0},
            
            
            
            
        ],
        amount: "$556.00", 
        status: "PENDING", 
        service: "Web Development", 
        fromStreet: "5960 Juniper Court", 
        fromCity: "Simi Valley", 
        fromZip: "93063", 
        fromCountry: "USA",
        toStreet: "1009 Oak Street",
        toCity: "Kalamazoo",
        toZip: "49001",
        toCountry: "USA",
        email: "test@test.com",
    },
    {
        invoiceNumber:"FV2353", 
        invoiceDateMonth: "Jan",
        invoiceDateDay: 5,
        invoiceDateYear: 2020,
        dueIn: 14,
        dueDate: "12 Nov 2021", 
        recipient: "Anita Wainwright",
        overallProject: "Web Development",
        
        itemsPurchased: [
            {description:"Node Server Development", qty: 1, pricePerItem: 5000, total: 0},
        ],
        amount: "$5,000.00", 
        status: "DRAFT", 
        service: "Backend Development", 
        fromStreet: "5960 Juniper Court", 
        fromCity: "Simi Valley", 
        fromZip: "93063", 
        fromCountry: "USA",
        toStreet: "2748 Borchard Road",
        toCity: "Newbury Park",
        toZip: "91320",
        toCountry: "USA",
        toEmail: "michaelrbraun1985@gmail.com",
        email: "yeees@yes.com"
    },
]



export default invoiceData;