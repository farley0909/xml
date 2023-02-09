import express from 'express'
import { ConsultaDTO } from "./DTO/ConsultaDTO"
import { xml2js } from 'xml-js'
import fs from 'fs'
import { gerarJSON } from './modules/gerarConsultaXML'
import { gerarOdontoXML } from './modules/gerarOdontoXML'
import { OdontoDTO } from './DTO/OdontoDTO'
import { gerarBaseJSON } from './modules/gerarBaseJSON'
import { consultaToJSON } from './modules/guiaConsultaJSON'
import { odontoToJSON } from './modules/guiaOdontoJSON'
import { honorariosToJSON } from './modules/guiaHonorariosJSON'
const app = express()
app.use(express.json())
app.use(express.static('Padrão TISS Comunicação 040100/'))






async function main(){
    //Primeiro eu vou transforma o meu arquivo base em JSON
    //Esse arquivo base contém a estrutura principal do xml
    let base = await gerarBaseJSON()
    let a = await honorariosToJSON()
   
    console.log(a)
}
main()

async  function preencheConsultaGuia(data){
    let consulta = await consultaToJSON()
    return consulta
}
async  function preencheOdontoGuia(data){
    let odonto = await consultaToJSON()
    return odonto
}

app.listen(8080, ()=> console.log('Server is running...'))


