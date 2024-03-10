'use server'

import crypto from "crypto";
import { GettingURL } from "../../components/interfaces";
import { NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';

function makeUrl({url, id, secondary}: GettingURL): string {
    const timestamp = new Date().getTime().toString()
    const publicKey = process.env.Next_PUBLIC_KEY
    const privateKey = process.env.Next_PRIVATE_KEY
    console.log("publicKey",publicKey)
    console.log("privateKey",privateKey)
    const hash = crypto.createHash('md5').update(timestamp + privateKey + publicKey).digest("hex")
    const new_url = url + id + secondary + '?' + `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    //console.log("new_url",new_url)
    return new_url
}

// export async function GetCharacters({url, id, secondary}: GettingURL) {
//     try{
//         const response = await fetch(makeUrl({url, id, secondary}))
//         const data = await response.json()
//         console.log(data.data.results)
//         return data.data.results
//     }catch(error){
//         console.log(error)
//     }
// }

export async function GET(req: NextRequest){
    console.log(req.nextUrl.searchParams)
    const url = req.nextUrl.searchParams.get('url') as string
    const id = req.nextUrl.searchParams.get('id') as string
    const secondary = req.nextUrl.searchParams.get('secondary') as string
    try {
        console.log(makeUrl({url, id, secondary}))
        const response = await fetch(makeUrl({url, id, secondary}))
        const data = await response.json()
        console.log(data.data.results)
        return NextResponse.json(data.data.results);
    } catch (error) {
        return NextResponse.json({error});
    }
}