'use client';

import { urls } from "@/components/constants";
import {useEffect, useState} from "react";
// import { GetCharacters } from "@/app/api/route";
import { Character } from "@/components/interfaces";
import {useRouter} from 'next/navigation'

export default function Characters() {
    const [characters, setCharacters] = useState([])
    const router = useRouter()
    // useEffect(() =>{
    //     async function fetchData(){
    //     const data = await GetCharacters({url: urls.characters, id:'', secondary:''})
    //     setCharacters(data)
    //     }
    //     fetchData()
    // },[])

    useEffect(() =>{
        async function fetchData(){
            // const sendData = {url: urls.characters, id: '', secondary:''}
            // const JSONdata = JSON.stringify(sendData);
            const endpoint = `/api?url=${urls.characters}&id=${''}&secondary=${''}`;
    
            const response = await fetch(endpoint);
            const data = await response.json()
            //const data = await GetCharacters({url: urls.characters, id:'', secondary:''})
            setCharacters(data)
        }
        fetchData()
    },[])

    const handleClick = (id: number, name: string) => {
        router.push(`/characters/${id}?name=${name}`)
    }
    return (
        <section className='flex justify-center items-center p-10'>
        {characters && characters.length > 0 && 
            <table className='w-4/5 text-center shadow-lg'>
            <thead>
                <tr className='border border-black font-[Inter]'>
                    <th className='border border-black text-[#393280]'>Character Name</th>
                    <th className='border border-black text-[#393280]'>Description</th>
                    <th className='border border-black text-[#393280]'>Information about the Comics</th>
                </tr>
            </thead>        
            <tbody>
                {characters.map((character: Character) => (
                <tr key={character.id} className="border border-black font-[Inter]">
                    <td className='border border-black text-[#ED553B] text-[Inter]'>{character.name}</td>
                    <td className='border border-black text-[#ED553B] text-[Inter]'>{character.description ? character.description: 'N/A'}</td>
                    <td >
                        <button className='border border-[#393280] text-[#393280] rounded p-1 m-2 hover:bg-[#393280] hover:text-white' onClick={() => handleClick(parseInt(character.id), character.name)}> {` More Info -> `}</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            } 
        </section>
    );
}