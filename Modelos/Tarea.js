const mongoose=require('mongoose');
let TareaSchema=mongoose.Schema({
    Id:Number,
    Nombre:String,
    Descripcion:String
});

//exponer
module.exports=mongoose.model('Tarea',TareaSchema,'Tareas');