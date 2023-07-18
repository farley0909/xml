import xml2js from 'xml2js'
import fs from 'fs'
import path from 'path'
export async function guiaSPToJSON(){
    let xmlContent = fs.readFileSync(path.resolve('./models/guiaSP-SADT.xml'))
    const parser = await new xml2js.Parser()
    let guiaSP = await parser.parseStringPromise(xmlContent)
    return guiaSP  
}


