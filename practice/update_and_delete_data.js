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

// Fruit.updateOne({ _id: '6126613f0f61dd05c21af239' }, { name: 'Nanas' }, function (error) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Berhasil update data apel menjadi nanas ke database');
//     }
// })

Fruit.deleteOne({ _id: '6126613f0f61dd05c21af239' }, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Berhasil delete data nanas menjadi nanas ke database');
    }
})

Fruit.find(function(error, fruits) {
    if(error) {
        console.log(error);
    } else {
        mongoose.connection.close();

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
        // console.log(fruits);
    }
});