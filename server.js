const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res ) {
    return res.render("home")
})

server.get("/conteudo", function(req, res ) {
    return res.render("conteudo" , {items: courses})
})

server.get("/sobre", function(req, res ) {
    return res.render("sobre")
})

server.get("/courses", function(req, res ) {
    return res.render("courses")
})

server.get("/courses/:id" , function(req , res){
    const id = req.params.id;
   
    const course = courses.find(function(course){
        return course.id == id
    })

    if(!course) {
        return res.send("Course not found!")
    }
     return res.render("courses", {items: course})
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(5000, function() {
    console.log("Server is running")
})