import fs from 'fs'
import xml2js from 'xml2js'
import { OdontoDTO } from '../DTO/OdontoDTO'
export async function gerarOdontoXML(odontoDTO:OdontoDTO){
    let consultaGuia = await fs.readFile(__dirname +'../../models/odonto.xml', async (err, data)=>{
        if(err) throw new Error(err.message)
        const parser = await new xml2js.Parser()
        let jsonOdonto = await parser.parseStringPromise(data)
        console.log(odontoDTO)
        
         jsonOdonto['ans:mensagemTISS']['ans:cabecalho'][0]['ans:identificacaoTransacao'][0]['ans:tipoTransacao'][0]=odontoDTO.tipoTransacao
        //Definindo o sequencial
         jsonOdonto['ans:mensagemTISS']['ans:cabecalho'][0]['ans:identificacaoTransacao'][0]['ans:sequencialTransacao'][0]= odontoDTO.sequencialTransacao
        // //Definindo data da transação
         jsonOdonto['ans:mensagemTISS']['ans:cabecalho'][0]['ans:identificacaoTransacao'][0]['ans:dataRegistroTransacao'][0]= odontoDTO.dataRegistroTransacao
        //Definindo a hora de registro da transação
         jsonOdonto['ans:mensagemTISS']['ans:cabecalho'][0]['ans:identificacaoTransacao'][0]['ans:horaRegistroTransacao'][0]= odontoDTO.horaRegistroTransacao
        //Definindo o codigo do prestador na operadora
        jsonOdonto['ans:mensagemTISS']['ans:cabecalho'][0]['ans:origem'][0]['ans:identificacaoPrestador'][0]['ans:codigoPrestadorNaOperadora'][0]=odontoDTO.codigoPrestadorNaOperadora
        //Definindo o codigo da prestadora de destino
         jsonOdonto['ans:mensagemTISS']['ans:cabecalho'][0]['ans:destino'][0]['ans:identificacaoPrestador'][0]['ans:codigoPrestadorNaOperadora'][0]=odontoDTO.codigoPrestadorNaOperadora
         //Definindo o usuario do prestador
         jsonOdonto['ans:mensagemTISS']['ans:cabecalho'][0]['ans:loginSenhaPrestador'][0]['ans:loginPrestador'][0]=odontoDTO.usuarioPrestador
        // //Definindo senha de login do prestador
         jsonOdonto['ans:mensagemTISS']['ans:cabecalho'][0]['ans:loginSenhaPrestador'][0]['ans:senhaPrestador'][0] = odontoDTO.senhaPrestador
    
         console.log(jsonOdonto['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'])
        })
}