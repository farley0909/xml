import express from 'express'
import { preencheConsulta } from './modules/Guia handle/preencheConsulta'
import { preencheGuiaSP } from './modules/Guia handle/preencheSP'
import { guiaSPDTO } from './DTO/GuiaSPDTO'
const app = express()
app.use(express.json())
app.use(express.static('Padrão TISS Comunicação 040100/'))




let guia:guiaSPDTO = {
    registroANS: '343153',
    numeroGuiaPrestador: '20220056',
    guiaPrincipal: '1485462',
    numeroCarteira: '',
    atendimentoRN: '',
    codigoPrestadorNaOperadora: '1209',
    nomeContratadoSolicitante: '',
    conselhoProfissional: '',
    numeroConselhoProfissional: '',
    uf: '',
    cbos: '',
    caraterAtendimento: '',
    cnes: '',
    tipoAtendimento: '',
    indicacaoAcidente: '',
    regimeAtendimento: '',
    valorTotalGeral: ''
}






async function main(){
   
    
}
main()


app.listen(8080, ()=> console.log('Server is running...'))


