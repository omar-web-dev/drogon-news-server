const express = require('express')
const categorize = require('./data/category.json')
const news = require('./data/news.json')
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
app.get(`/news-category/:id` , (req,res) => {
    const id = req.params.id
    if (id === '08') {
        res.send(news)
    }else{
        const newses = news.filter(c => c.category_id === id)
        res.send(newses)
    }
})
app.get('/news/:id' , (req,res) => {
    const id = req.params.id
    const selectNews = news.find(n => n._id === id)
    res.send(selectNews)
    // res.send(req.news.pram.id)
})

app.get('/news' , (req,res) => {
    res.send(news)
})



app.listen(port, () => {
    console.log('Dragon news server running' , port);
})