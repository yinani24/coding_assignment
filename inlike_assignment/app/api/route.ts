'use server'

import crypto from "crypto";
import { GettingURL } from "../../components/interfaces";

function makeUrl({url, id, secondary}: GettingURL): string {
    const timestamp = new Date().getTime().toString()
    const publicKey = process.env.PUBLIC_KEY
    const privateKey = process.env.PRIVATE_KEY
    const hash = crypto.createHash('md5').update(timestamp + privateKey + publicKey).digest("hex")
    const new_url = url + id + secondary + '?' + `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    //console.log(new_url)
    return new_url
}

export async function GetCharacters({url, id, secondary}: GettingURL) {
    try{
        const response = await fetch(makeUrl({url, id, secondary}))
        const data = await response.json()
        console.log(data.data.results)
        return data.data.results
    }catch(error){
        console.log(error)
    }
}