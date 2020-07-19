const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res ) {
    return res.render("home")
})

server.get("/conteudo", function(req, res ) {
    return res.render("conteudo" , {items: videos})
})

server.get("/sobre", function(req, res ) {
    return res.render("sobre")
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(5000, function() {
    console.log("Server is running")
})