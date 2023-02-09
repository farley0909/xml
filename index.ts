import express from 'express'
import { ConsultaDTO } from "./DTO/ConsultaDTO"
import { xml2js } from 'xml-js'
import fs from 'fs'
import { gerarJSON } from './modules/gerarConsultaXML'
import { gerarOdontoXML } from './modules/gerarOdontoXML'
import { OdontoDTO } from './DTO/OdontoDTO'
const app = express()
app.use(express.json())
app.use(express.static('Padrão TISS Comunicação 040100/'))


app.get('/', (req, res)=>{
    res.send('main route')
})
function preencheOdonto(){
    console.log('--------------- Odonto --------------------')
    let odonto = new OdontoDTO()
    odonto.sequencialTransacao = '07263'
    odonto.tipoTransacao='ENVIO_LOTE_GUIAS'
    gerarOdontoXML(odonto)
}
preencheOdonto()






async function preencheConsulta(){
    let consultaDados = new ConsultaDTO()
    consultaDados.sequencialTransacao = '07263'
    consultaDados.tipoTransacao='ENVIO_LOTE_GUIAS'
    consultaDados.codigoPrestadorNaOperadora='00239'
    consultaDados.usuarioPrestador='chama-dev'
    consultaDados.senhaPrestador='senha123'
    consultaDados.numeroLote ='20'
    consultaDados.registroANS = '234234'
    consultaDados.numeroGuiaPrestador = '005711'
    consultaDados.ausenciaCodValidacao = '01'
    consultaDados.codigoValidacao='09324'
    consultaDados.numeroCarteiraBeneficiario = '2090392'
    consultaDados.atendimenteRN = 'S'
    consultaDados.cnpjContratadoExecutante = '15426341000109'
    consultaDados.cnes = '20394'
    consultaDados.conselhoProfissionalExecutante = '15'
    consultaDados.numeroConselhoProfissionalExecutante = '20324'
    consultaDados.ufProfissionalExecutante = '12'
    consultaDados.cbosProfissionalExecutante = '201115'
    consultaDados.indicacaoAcidente = '1'
    consultaDados.dataAtendimento = '2020-04-01'
    consultaDados.regimeAtendimento = '02'
    consultaDados.tipoConsulta = '2'
    consultaDados.codigoTabelaProcedimento = '20'
    consultaDados.codigoProcedimento = '17'
    consultaDados.valorProcedimento = '240.00'
    consultaDados.observacao = 'Teste de xml consulta2'
    gerarJSON(consultaDados)
}
preencheConsulta()

app.listen(8080, ()=>console.log('server runing...'))


