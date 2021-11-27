//traer la base de datos
const db = require('../models');

//FUNCION SELECT *FROM libro, hace que la funcion se exporte y se guarde para ello utilizamos una funcion anónima (=>)
const getBooks = async () => {
    //llamo a la base de datos
    const books = await db.libro.findAll({
        include: db.autor
    }).then(result => {
        return result;
    });
    return books;
}

//Conseguir libros a traves de sus ID, Select*FROM tabla Where id libdro. Se puede filtrar mediante parametro por medio del I => {
 const getBookById= async (id) => {
     console.log('-*-*-*-*-*-*-*');
     console.log(' El ID que llego a /api es + id');
     console.log('-*-*-*-*-*-*-*');
     
     //SELECT*FROM libro Where id_libro=4
     const book= await db.libro.findByPk(id, { 
         include: db.autor
     }).then (result => {
         return result;
     });

     return book;
 }


//Exportamos las funciones
module.exports={
    getBooks,
    getBookById
}