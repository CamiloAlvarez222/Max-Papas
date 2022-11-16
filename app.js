const express= require('express');
const path= require('path')
const app= express();
app.use(express.static(path.join(__dirname,'./public')));
const router= require('./routers/main.js')
const port= 3000;
app.listen(port,()=>{
    console.log( 'Servidor con Exito en el puerto '+ port)
});

app.use("/",router);

