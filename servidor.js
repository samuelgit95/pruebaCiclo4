// Prueba de aplicaicon
//asignaciones
const { application } = require('express');
const express=require('express');
const Mongoose = require('mongoose');
const aplicacion=express();
const router=express.Router();

const TareaSchema=require('./Modelos/Tarea.js');
//crud
//get para consultar
router.get('/',(req,res)=>{
    res.send("Prueba de get en la página");
});

aplicacion.use(express.urlencoded({extended:true}));
aplicacion.use(express.json());
aplicacion.use(router);

//cadena de conexión
Mongoose.connect("mongodb+srv://proweb:proweb@prueba.ywb9v.mongodb.net/PruebaGrupo?retryWrites=true&w=majority");



//escucha del servidor web

aplicacion.listen(3000,()=>{
    console.log("Servidor web iniciado");
});

