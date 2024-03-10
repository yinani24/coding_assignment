'use client'

import { use, useEffect, useState } from 'react'
import { GetCharacters } from '@/app/api/route'
import { urls } from '@/components/constants'
import Extract from './extractComicInfo'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Comics } from '@/components/interfaces'
import { ComicCard } from './ComicCard'

export default function CharacterId() {
    const [comics, setComics]= useState<Comics[]>([])
    // const router = useRouter()
    const params = useParams<{characterID: string}>()
    const searchParams = useSearchParams()
    const characterName = searchParams.get('name')
    console.log(params)
    useEffect(() =>{
        async function fetchData(){
            console.log(params.characterID)
            const data = await GetCharacters({url: urls.characters, id: '/' + params.characterID, secondary:'/comics'})
            //setComics(data)
            console.log(Extract(data))
            setComics(Extract(data))
        }
        fetchData()
    },[params.characterID])

    return(
        <section className='w-full p-10'>
            <h1 className='text-center text-3xl font-bold m-5 text-[#393280]'>{`All the Comics with ${characterName}`}</h1>
            {comics && comics.length > 0 &&
                <ul className='grid grid-cols-3 gap-5'>
                    {comics.map((comic: Comics, id: number) => (
                            <li key={id}>
                                <ComicCard key={comic.title} {...comic}/>
                            </li>
                        ))
                    }
                </ul>
            }
        </section>
    )
}