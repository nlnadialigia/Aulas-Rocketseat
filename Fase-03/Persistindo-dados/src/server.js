const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({extended: true}))//responsável por fazer funcionar o req.body
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express: server,
    autoscape: false,
    noCache: true
})

server.listen(5010, function(){
    console.log("SERVER IS RUNNING")
})