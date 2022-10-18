const express = require('express')
const categorize = require('./data/category.json')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000


app.get('/' , (req,res) => {
    res.send('Welcome to our dragon news')
})
app.use(cors())
app.get('/news-category' , (req,res) => {
    res.send(categorize)
})



app.listen(port, () => {
    console.log('Dragon news server running' , port);
})