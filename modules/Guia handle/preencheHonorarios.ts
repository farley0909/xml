import { honorariosToJSON } from "../JSON factory/guiaHonorariosJSON"

export async  function preencheHonorariosGuia(data){
    let honorarios= await honorariosToJSON()
    return honorarios
}