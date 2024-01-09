const mongoose=require('mongoose');
const url="mongodb+srv://wajiharaza:12345678W@cluster0.zovibt7.mongodb.net/mydatabase?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports=mongoose;