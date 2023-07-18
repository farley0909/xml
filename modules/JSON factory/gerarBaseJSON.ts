import xml2js from 'xml2js'
import fs from 'fs'
export async function gerarBaseJSON(){
    let xmlContent = fs.readFileSync(__dirname +'../../models/base.xml')
    const parser = await new xml2js.Parser()
    let baseJSON = await parser.parseStringPromise(xmlContent)
    return baseJSON  
}


