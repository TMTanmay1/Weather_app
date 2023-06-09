const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
// Define path for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and view location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/home',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name: 'Tanmay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Tanmay'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        HelpText:'Some helpful Text',
        name:'Tanmay'
    })
})



// app.get('',(req,res)=>{
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'Tanmay'
//     }, {
//         name:'Trix'
//     }])
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About</h1>')
// })

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide an address'
        })
    }


    res.send({
        forecast:'It is snowing',
        location:'Philadelphia',
        address: req.query.address
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        res.send({
            error:'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})

app.get('*',(req,res)=>{
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.');
})