const mongoose = require('mongoose')

const url =
    'mongodb+srv://aditya:Mongodata@aditya.noc5v.mongodb.net/Mercedes?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
    make : String,
    model : String,
    year: String,
    VIN : String,
    VehicleType : String,
    address : String,
    date: Date

})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    make: "MERCEDES-BENZ",
    model: 'CLA 250 Coupe',
    year: 2021,
    vin: 'W1K5J4HB3MN163868',
    VehicleType: "Passenger Car",
    date: new Date(),

})

note.save().then(() => {
    console.log('saved!')
    mongoose.connection.close()
})
