const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cb-mongoose", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data name tidak ada']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data name tidak ada']
    },
    umur: {
        type: Number,
    },
    favoriteFruit: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

const fruitDuku = new Fruit({
    name: "Duku",
    rating: 8,
    review: "Rasanya manis",
});

fruitDuku.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("berhasil simpan buah duku ke dalam database");
    }
});

const people = new People({
    name: 'Amanda',
    age: 20,
    favoriteFruit: fruitDuku
});

people.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("berhasil create relationship amanda dengan duku");
    }
});
