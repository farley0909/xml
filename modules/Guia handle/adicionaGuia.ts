export function adicionaGuia(base, guia){
    base['ans:mensagemTISS']['ans:prestadorParaOperadora'].push(guia)
    return base
}