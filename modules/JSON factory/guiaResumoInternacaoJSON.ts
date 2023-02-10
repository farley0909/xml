import xml2js from 'xml2js'
import fs from 'fs'

export async function resumoInternacaoToJSON(){
    let xmlContent = fs.readFileSync(__dirname +'../../models/guiaResumoInternacao.xml')
    const parser = await new xml2js.Parser()
    let resumoInternacao = await parser.parseStringPromise(xmlContent)
    return resumoInternacao  
}


