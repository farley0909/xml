import { guiaSPDTO } from "../../DTO/GuiaSPDTO"
import { guiaSPToJSON } from "../JSON factory/guiaSP-SadtToJSON"

export async function preencheGuiaSP(data:guiaSPDTO){
    let guiaSP = await guiaSPToJSON()

    //Preenchendo o cabecalho da guia
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:cabecalhoGuia'][0]['ans:registroANS'][0] = data.registroANS
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:cabecalhoGuia'][0]['ans:numeroGuiaPrestador'][0] = data.numeroGuiaPrestador
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:cabecalhoGuia'][0]['ans:guiaPrincipal'][0] = data.guiaPrincipal
    //Preenche dados do beneficiario
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosBeneficiario'][0]['ans:numeroCarteira'][0] = data.numeroCarteira 
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosBeneficiario'][0]['ans:atendimentoRN'][0] = data.atendimentoRN
    //Preenchendo os dados do solicitante
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosSolicitante'][0]['ans:contratadoSolicitante'][0]['ans:codigoPrestadorNaOperadora'][0] = data.codigoPrestadorNaOperadora
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosSolicitante'][0]['ans:nomeContratadoSolicitante'][0] = data.nomeContratadoSolicitante
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosSolicitante'][0]['ans:profissionalSolicitante'][0]['ans:conselhoProfissional'][0] = data.conselhoProfissional
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosSolicitante'][0]['ans:profissionalSolicitante'][0]['ans:numeroConselhoProfissional'][0] = data.numeroConselhoProfissional
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosSolicitante'][0]['ans:profissionalSolicitante'][0]['ans:UF'][0] = data.uf
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosSolicitante'][0]['ans:profissionalSolicitante'][0]['ans:CBOS'][0] = data.cbos
    //Preenchendo os dados da solicitação
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosSolicitacao'][0]['ans:caraterAtendimento'][0] = data.caraterAtendimento
    //Preenchendo dados do executante
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosExecutante'][0]['ans:contratadoExecutante'][0]['ans:codigoPrestadorNaOperadora'][0] = data.codigoPrestadorNaOperadora
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosExecutante'][0]['ans:CNES'][0] = data.cnes
    //Preenchendo os dados do atendimento
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosAtendimento'][0]['ans:tipoAtendimento'][0] = data.tipoAtendimento
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosAtendimento'][0]['ans:indicacaoAcidente'][0] = data.indicacaoAcidente
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:dadosAtendimento'][0]['ans:regimeAtendimento'][0] = data.regimeAtendimento
    //Preenchendo o valor total
    guiaSP['ans:guiasTISS']['ans:guiaSP-SADT'][0]['ans:valorTotal'][0]['ans:valorTotalGeral'][0] = data.valorTotalGeral
    return guiaSP
}

