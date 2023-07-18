import { xml2js } from "xml2js"

export async function converterParaXML(guia){   
    let builder = new xml2js.Builder()
    let xmlGuia = builder.buildObject(guia)
    return xmlGuia
}