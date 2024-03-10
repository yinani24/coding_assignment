'use client'

import { use, useEffect, useState } from 'react'
import { GetCharacters } from '@/app/api/route'
import { urls } from '@/components/constants'
import Extract from './extractComicInfo'
import { useParams } from 'next/navigation'
import { Comics } from '@/components/interfaces'
import { ComicCard } from './ComicCard'

export default function CharacterId() {
    const [comics, setComics]= useState<Comics[]>([])
    // const router = useRouter()
    const params = useParams<{characterID: string}>()
    useEffect(() =>{
        async function fetchData(){
            console.log(params.characterID)
            const data = await GetCharacters({url: urls.characters, id: '/' + params.characterID, secondary:'/comics'})
            //setComics(data)
            console.log(Extract(data))
            setComics(Extract(data))
        }
        fetchData()
    },[])

    return(
        <section className='w-84'>
            {comics && comics.length > 0 &&
                <ul>
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