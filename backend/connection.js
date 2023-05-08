const mongoose = require("mongoose");

const url = 'mongodb+srv://deepjyoti0401:Deepjyotiyadav@cluster0.gfgfmia.mongodb.net/mydatabase?retryWrites=true&w=majority'

mongoose.connect(url)


.then((result) => {
    console.log('database connected');    
}).catch((err) => {
    console.error(err);
}); 

module.exports = mongoose;