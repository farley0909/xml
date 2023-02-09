import { Cabecalho } from "./abstract/CabecalhoDTO"

export class ConsultaDTO extends Cabecalho{
   
    public numeroLote:string
    public registroANS:string
    public numeroGuiaPrestador:string
    public ausenciaCodValidacao:string
    public codigoValidacao:string
    public numeroCarteiraBeneficiario:string
    public atendimenteRN:string
    public cnpjContratadoExecutante:string
    public cnes:string
    public conselhoProfissionalExecutante:string
    public numeroConselhoProfissionalExecutante:string
    public ufProfissionalExecutante:string
    public cbosProfissionalExecutante:string
    public indicacaoAcidente:string
    public regimeAtendimento:string
    public dataAtendimento:string
    public tipoConsulta:string
    public codigoTabelaProcedimento:string
    public codigoProcedimento:string
    public valorProcedimento:string
    public observacao:string
    constructor(){
        super()
       
    }
}
