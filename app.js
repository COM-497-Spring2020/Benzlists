const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

Mongoose.connect('mongodb+srv://aditya:Mongodata@aditya.noc5v.mongodb.net/Mercedes?retryWrites=true&w=majority', { useNewUrlParser: true});

const carsModel = Mongoose.model("cars", {
    make : String,
    model : String,
    year: String,
    VIN : String,
    VehicleType : String,
    address : String,
});

app.post("/cars", async (request, response) => {
    try {
        const cars = new carsModel(request.body);
        const result = await cars.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(5000, () => {
    console.log("Listening at :5000...");
});