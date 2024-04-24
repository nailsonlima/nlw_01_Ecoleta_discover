// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no db
const db = new sqlite3.Database("./src/database/database.db")

// exportar o db
module.exports = db

// utilizar o objeto de banco de dados para nossas operações
db.serialize(() => {
    // COM COMANDOS SQL EU VOU

    // 1 criar uma tabela
        // db.run(`
        // CREATE TABLE IF NOT EXISTS places (
        //     id INTEGER PRIMARY KEY AUTOINCREMENT,
        //     image TEXT,
        //     name TEXT,
        //     adress TEXT,
        //     adress2 TEXT,
        //     state TEXT,
        //     city TEXT,
        //     items TEXT
        //     );
        // `)
        // // 2 inserir dados na tabela
        // const query =(`
        // INSERT INTO places (
        //     image,
        //     name,
        //     adress,
        //     adress2,
        //     state,
        //     city,
        //     items
        // ) VALUES (?,?,?,?,?,?,?);
        // `)

        // const values = [
        //     "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     "Papersider",
        //     "Rua das desgraças",
        //     "Numero 666",
        //     "Rio de Janeiro",
        //     "Bala",
        //     "Papeis e Papelões, Papel"]   

        //     function afterInsertData(err){
        //         if(err){
        //             return console.log(err)
        //         }
        //         console.log("cadastrado com sucesso")
        //         console.log(this)
        //     }
        // db.run(query, values, afterInsertData)

    // 3 consultar os dados na tabela
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("aqui estão seus registros!")
    //     console.log(rows)
    // })

    // 4 deletar dados na tabela
        // db.run(`DELETE FROM places WHERE id = ?`, [7], function(err){
        //     if(err){
        //         console.log(err)
        //     }
        //     console.log("registro deletado com sucesso!")
        // })


})
