const mongoose=require('mongoose');
let TareaSchema=mongoose.Schema({
    IdTarea:Number,
    NombreTarea:String,
    DetalleTarea:String
});

//exponer
module.exports=mongoose.model('Tarea',TareaSchema,'Tareas');