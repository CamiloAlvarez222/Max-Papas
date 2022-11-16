const path=require('path');

const maincontroller={
    index:
    (req,res)=> {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },

    carrito:
    (req,res)=> {
        res.sendFile(path.join(__dirname, '../views/Carrito.html'));
    }

}

module.exports= maincontroller;

