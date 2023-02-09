import { ConsultaDTO } from "../DTO/ConsultaDTO"

const xml2js = require('xml2js')
const fs = require('fs')

export async function gerarJSON(consultaDados:ConsultaDTO){
    let consultaGuia = await fs.readFile(__dirname +'../../models/consulta.xml', async (err, data)=>{
        if(err) throw new Error(err)
        const parser = await new xml2js.Parser()
        let jsonConsulta = await parser.parseStringPromise(data)
        // console.log(a['ans:mensagemTISS']['ans:cabecalho'][0]['ans:destino'][0]['ans:identificacaoPrestador'][0])
        let builder = new xml2js.Builder()
        
        //Definindo o tipo de transação
        jsonConsulta['ans:mensagemTISS']['ans:cabecalho'][0]['ans:identificacaoTransacao'][0]['ans:tipoTransacao'][0]=consultaDados.tipoTransacao
        //Definindo o sequencial
        jsonConsulta['ans:mensagemTISS']['ans:cabecalho'][0]['ans:identificacaoTransacao'][0]['ans:sequencialTransacao'][0]= consultaDados.sequencialTransacao
        //Definindo data da transação
        jsonConsulta['ans:mensagemTISS']['ans:cabecalho'][0]['ans:identificacaoTransacao'][0]['ans:dataRegistroTransacao'][0]= consultaDados.dataRegistroTransacao
        //Definindo a hora de registro da transação
        jsonConsulta['ans:mensagemTISS']['ans:cabecalho'][0]['ans:identificacaoTransacao'][0]['ans:horaRegistroTransacao'][0]= consultaDados.horaRegistroTransacao
        //Definindo o codigo do prestador na operadora
        jsonConsulta['ans:mensagemTISS']['ans:cabecalho'][0]['ans:origem'][0]['ans:identificacaoPrestador'][0]['ans:codigoPrestadorNaOperadora'][0]=consultaDados.codigoPrestadorNaOperadora
        //Definindo o codigo da prestadora de destino
        jsonConsulta['ans:mensagemTISS']['ans:cabecalho'][0]['ans:destino'][0]['ans:identificacaoPrestador'][0]['ans:codigoPrestadorNaOperadora'][0]=consultaDados.codigoPrestadorNaOperadora
        //Definindo o usuario do prestador
        jsonConsulta['ans:mensagemTISS']['ans:cabecalho'][0]['ans:loginSenhaPrestador'][0]['ans:loginPrestador'][0]=consultaDados.usuarioPrestador
        //Definindo senha de login do prestador
        jsonConsulta['ans:mensagemTISS']['ans:cabecalho'][0]['ans:loginSenhaPrestador'][0]['ans:senhaPrestador'][0] = consultaDados.senhaPrestador
        //---------------------------Corpo do XML--------------------------------------------//
        //Definindo o numero de lote
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:numeroLote"][0]=""+consultaDados.numeroLote
        //Definindo o registro ANS
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:cabecalhoConsulta'][0]['ans:registroANS'][0]=''+consultaDados.registroANS
        //Definindo o numero da guia do prestador
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:cabecalhoConsulta'][0]['ans:numeroGuiaPrestador'][0]= consultaDados.numeroGuiaPrestador
        //Definindo ausencia de validação
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:ausenciaCodValidacao'][0]= consultaDados.ausenciaCodValidacao
        //Definindo o codigo de validação
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:codValidacao'][0]= consultaDados.codigoValidacao
        //Definindo o numero da carteira do beneficiario
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]["ans:dadosBeneficiario"][0]['ans:numeroCarteira'][0] = consultaDados.numeroCarteiraBeneficiario
        //Definindo o atendimento RN
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]["ans:dadosBeneficiario"][0]['ans:atendimentoRN'][0] = consultaDados.atendimenteRN
        //Definindo CNPJ do contratado executante
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:contratadoExecutante'][0]['ans:cnpjContratado'][0] = consultaDados.cnpjContratadoExecutante
        //Definindo CNES
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:contratadoExecutante'][0]['ans:CNES'][0] = consultaDados.cnes
        //Definindo conselho do profissional Executante
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:profissionalExecutante'][0]['ans:conselhoProfissional'][0]= consultaDados.conselhoProfissionalExecutante
        //Definindo o numero do conselho do profissional executante
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:profissionalExecutante'][0]['ans:numeroConselhoProfissional'][0] = consultaDados.numeroConselhoProfissionalExecutante
        //Definindo UF do profissional executante
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:profissionalExecutante'][0]['ans:UF'][0] = consultaDados.ufProfissionalExecutante
        //Definindo CBOS do profissional executante
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:profissionalExecutante'][0]['ans:CBOS'][0]=consultaDados.cbosProfissionalExecutante
        //Definindo indicacao de acidente
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:indicacaoAcidente'][0]=consultaDados.indicacaoAcidente
        //Definindo o regime de atendimento
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:regimeAtendimento'][0]= consultaDados.regimeAtendimento
        //Definindo a data de Atendimento
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:dataAtendimento'][0]=consultaDados.dataAtendimento
        //definindo o tipo de consulta
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:tipoConsulta'][0] = consultaDados.tipoConsulta
        //Definindo o codigo da tabela
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:procedimento'][0]['ans:codigoTabela'][0] = consultaDados.codigoTabelaProcedimento
        //Definindo o codigo do procedimento
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:procedimento'][0]['ans:codigoProcedimento'][0]=consultaDados.codigoProcedimento
        //Definindo o valor do procedimento
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:dadosAtendimento'][0]['ans:procedimento'][0]['ans:valorProcedimento'][0]=consultaDados.valorProcedimento
        //Definindo a observação
        jsonConsulta['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]["ans:guiasTISS"][0]['ans:guiaConsulta'][0]['ans:observacao'][0] = consultaDados.observacao
        return jsonConsulta
        //Removendo o diretorio util e todos os arquivos contidos nele
        await fs.rm('./util', { recursive:true }, (err) => {
            if(err){
                // Files deldlleddtion failed
                console.error('err.mekssage');
                return;
            }
        })
        //Se o diretorio util não existir ele vai criar o diretorioa
        if (!fs.existsSync('./util')){
            //Efetua a criação do diretório
            fs.mkdir('./util', (err) => {
                if (err) {
                    console.log("Deu ruim...");
                    return
                }
        
                console.log("Diretório criado! =)")
            });
        }
        //Por fim vai converter o json em xml e salvar na pasta util
        let xmlConsulta = builder.buildObject(jsonConsulta)
        fs.appendFile('./util/'+new Date().getTime()+'.xml', xmlConsulta, ()=>{})
               
    })
        
}
