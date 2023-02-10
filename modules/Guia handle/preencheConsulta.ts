import { consultaDTO } from "../../DTO/ConsultaDTO"
import { consultaToJSON } from "../JSON factory/guiaConsultaJSON"

export async  function preencheConsulta(data:consultaDTO){
    let consulta = await consultaToJSON()
    //Preenchendo o cabeçalho da consulta
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:cabecalhoConsulta'][0]['ans:registroANS'][0] = data.registroANS
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:cabecalhoConsulta'][0]['ans:numeroGuiaPrestador'][0] = data.numeroGuiaPrestador
    //Preenchendo os dados do beneficiario
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:dadosBeneficiario'][0]['ans:numeroCarteira'][0] = data.numeroCarteira 
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:dadosBeneficiario'][0]['ans:atendimentoRN'][0] = data.atendimentoRN
    //Preenchendo os dados do contratado executante
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:contratadoExecutante'][0]['ans:codigoPrestadorNaOperadora'][0] = data.codigoPrestadorNaOperadora
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:contratadoExecutante'][0]['ans:CNES'][0] = data.cnes
    //Preenchendo os dados do profissional executante
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:profissionalExecutante'][0]['ans:conselhoProfissional'][0] = data.conselhoProfissional
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:profissionalExecutante'][0]['ans:numeroConselhoProfissional'][0] = data.numeroConselhoProfissional
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:profissionalExecutante'][0]['ans:UF'][0] = data.uf
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:profissionalExecutante'][0]['ans:CBOS'][0] = data.cbos
    //Preenchendo indicação de acidente
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:indicacaoAcidente'][0] = data.indicacaoAcidente
    //Preenchendo os dados do atendimento
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:regimeAtendimento'][0] = data.regimeAtendimento
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:dataAtendimento'][0] = data.dataAtendimento
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:tipoConsulta'][0] = data.tipoConsulta
    //Preenchendo os dados do procedimento
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:procedimento'][0]['ans:codigoTabela'][0] = data.codigoTabela
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:procedimento'][0]['ans:codigoProcedimento'][0] = data.codigoProcedimento
    consulta['ans:guiasTISS']['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:procedimento'][0]['ans:valorProcedimento'][0] = data.valorProcedimento

    return consulta
    
}
