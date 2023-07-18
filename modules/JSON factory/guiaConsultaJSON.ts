import xml2js from 'xml2js'
import fs from 'fs'
import path from 'path'
export async function consultaToJSON(){
    let xmlContent = fs.readFileSync(path.resolve('./models/guiaConsulta.xml'))
    const parser = await new xml2js.Parser()
    let guiaConsulta = await parser.parseStringPromise(xmlContent)
    return guiaConsulta  
}


