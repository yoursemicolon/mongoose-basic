const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cb-mongoose", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Rasanya manis",
});

apple.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("berhasil simpan buah apel ke dalam database");
    }
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Buah terbaik",
});

const jeruk = new Fruit({
    name: "Jeruk",
    rating: 9,
    review: "Rasanya segar",
});

const pisang = new Fruit({
    name: "Pisang",
    rating: 6,
    review: "Manis",
});

Fruit.insertMany([kiwi, jeruk, pisang], function(error) {
    if(error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log("berhasil simpan buah ke dalam database");
    }
})