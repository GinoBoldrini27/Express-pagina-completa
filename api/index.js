//traer la base de datos
const db = require('../models');

//FUNCION SELECT *FROM libro, hace que la funcion se exporte y se guarde para ello utilizamos una funcion anónima (=>)
const getBooks = async () => {
    //llamo a la base de datos
    const books = await db.libro.findAll().then(result => {
        return result;
    });
    return books;
}

//Exportamos las funciones
module.exports={
    getBooks
}