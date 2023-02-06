const express = require('express')
const xml2js = require('xml2js')
const fs = require('fs')
const app = express()
app.use(express.json())
app.use(express.static('Padrão TISS Comunicação 040100/'))
app.get('/', (req, res)=>{
    res.send('main route')
})
app.post('/consultaGuia/create/', async (req, res)=>{

})

app.listen(8080, ()=>console.log('server runing...'))

let consultaGuia = fs.readFile(__dirname +'/consulta.xml', async (err, data)=>{
    if(err) throw new Error(err)
    const parser = new xml2js.Parser()
    let a = await parser.parseStringPromise(data)
    console.log(a['ans:mensagemTISS']['ans:cabecalho'][0]['ans:destino'][0]['ans:identificacaoPrestador'][0])
})
