const {model,Schema} =require('../connection');
// schema is a variable
const mySchema=new Schema({
    title:String,
    category:String,
    material:String,
    type:String,
    image:String,
    price:number,
});
// creating model and exporting
module.exports=model('handicraft',mySchema);