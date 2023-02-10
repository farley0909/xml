import xml2js from 'xml2js'
import fs from 'fs'

export async function odontoToJSON(){
    let xmlContent = fs.readFileSync(__dirname +'../../models/guiaOdonto.xml')
    const parser = await new xml2js.Parser()
    let guiaOdonto = await parser.parseStringPromise(xmlContent)
    return guiaOdonto  
}


