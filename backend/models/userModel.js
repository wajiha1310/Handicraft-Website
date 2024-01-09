const {model,Schema} =require('../connection');
// schema is a variable
const mySchema=new Schema({
    name:String,
    email:String,
    password:String,
    location : {type : String, default : 'Not Specified'},
});
// creating model and exporting
module.exports=model('users',mySchema);