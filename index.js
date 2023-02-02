const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('Padrão TISS Comunicação 040100/'))
app.get('/', (req, res)=>{
    res.send('main route')
})
app.listen(8080, ()=>console.log('server runing...'))