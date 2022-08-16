const connect ="mongodb+srv://jayyqwe123:1234@nodeexpressprojects.kmefbd0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const mongoose = require("mongoose")



const  connectDB = (url) => {
    mongoose.connect( 
        url 
        ).then(() => console.log('Connected to the DB')).catch((err)=> console.log(err))
    
}

module.exports = connectDB