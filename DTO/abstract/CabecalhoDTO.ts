export abstract class Cabecalho {
    public tipoTransacao:string
    public sequencialTransacao:string
    public dataRegistroTransacao:string
    public horaRegistroTransacao:string
    public codigoPrestadorNaOperadora:string
    public usuarioPrestador:string
    public senhaPrestador:string
    constructor(){
        this.horaRegistroTransacao = new Date().toLocaleTimeString()
        let mes =''+(new Date().getMonth()+1)
        let dia = (''+new Date().toDateString()).split(' ')
        if((parseInt(mes))<10) mes='0'+mes
        this.dataRegistroTransacao = ''+new Date().getFullYear()+'-'+mes+"-"+dia[2]
    }
}