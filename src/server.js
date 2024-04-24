const express = require("express")
const server = express()

//  pegar o banco de dados
const db = require("./database/db")

//configurar pasta public
server.use(express.static("public"))

// habilitar o uso do req body na nossa aplicação
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

//configurar caminhhos

//pagina inicial
server.get("/", function(req, res) {
    return res.render("index.html")
})
//create-point
server.get("/create-point.html", function(req, res) {

    // console.log(req.query)

    return res.render("create-point.html")
})
server.post("/savepoint", (req, res) => {


    // console.log(req.query)
    // console.log(req.body)

    //inserir dados no banco de dados
        const query =(`
        INSERT INTO places (
            image,
            name,
            adress,
            adress2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
        `)

        const values = [
            req.body.image,
            req.body.name,
            req.body.adress,
            req.body.adress2,
            req.body.state,
            req.body.city,
            req.body.items,
        ]   

            function afterInsertData(err){
                if(err){
                    console.log(err)
                    return res.send("erro no cadastro!")
                }
                console.log("cadastrado com sucesso")
                console.log(this)
                return res.render('create-point.html', {saved: true})
            }
        db.run(query, values, afterInsertData)

})

server.get("/search", function(req, res) {

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("search-results.html", {total : 0})
    }

    // pegar os dados no db 
        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }
        
        const total = rows.length;

        // mostrar a página html com os dados do db

        return res.render("search-results.html", {places: rows, total: total})
    })

})

//ligar o servidor
server.listen(3000)