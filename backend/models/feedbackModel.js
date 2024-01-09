const {model,Schema} =require('../connection');
// schema is a variable
const mySchema=new Schema({
    name:String,
    email:String,
    rating:String,
    textarea :String,
});
// creating model and exporting
module.exports=model('feedback',mySchema);