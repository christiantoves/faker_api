// 1. IMPORT EXPRESS AND CREATE AN EXPRESS SERVER

const express = require("express") // import express from "express"
const faker = require("faker")
const app = express() // INSTANTIATING AN EXPRESS SERVER (we do not need to call it app)
const port = 8000 // designating port number

// 2. CONFIGURE YOUR EXPRESS SERVER
app.use( express.json() ); // ALLOWS JSON USAGE
app.use( express.urlencoded({ extened: true }) ); // ACCEPT POST REQUESTS

// 3. DEFINE ALL THE URLS FOR YOUR EXPRESS SERVER

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber =faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this.id =faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}


app.get("/api/users/new", (request, response) => { // we are defining our app.ROUTES
    console.log(request) // this is a req that will go to the DB, currently dummy data
    response.json( //using response object to turn it into a json object
        new User()
        // 'message': 'THIS IS THE GET /api/users route' // when we type (localhost8000/api/users) we get this message
    )
})
app.get("/api/companies/new", (request, response) => {
    console.log(request)
    response.json(
        new Company()
    )
})

app.get("/api/user/company", (request, response) => {
    console.log(request)
    response.json({
        user : new User(),
        company : new Company()
    })
})
// app.post("/api/users", (req, res) => {
//     console.log(req.body) // this is a req that will go to the DB, currently dummy data
//     res.json({
//         'message': "This is the POST /api/users route"
//     })
// })

// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log(`SERVER IS RUNNING ON PORT ${port}`) )
