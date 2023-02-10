import xml2js from 'xml2js'
import fs from 'fs'
export async function honorariosToJSON(){
    let xmlContent = fs.readFileSync(__dirname +'../../models/guiaHonorarios.xml')
    const parser = await new xml2js.Parser()
    let honorarios = await parser.parseStringPromise(xmlContent)
    return honorarios  
}


