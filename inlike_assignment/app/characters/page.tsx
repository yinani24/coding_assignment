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
            <table className='w-10/12 text-center shadow-2xl shadow-[#ED553B80]'>
            <thead>
                <tr className='border border-[#ED553B80] font-mono text-xl'>
                    <th className='border border-[#ED553B80] text-[#393280] p-4'>Character Name</th>
                    <th className='border border-[#ED553B80] text-[#393280] p-4'>Description</th>
                    <th className='border border-[#ED553B80] text-[#393280] p-4'>Information about the Comics</th>
                </tr>
            </thead>        
            <tbody>
                {characters.map((character: Character) => (
                <tr key={character.id} className="border border-[#ED553B80] font-sans ">
                    <td className='border border-[#ED553B80] text-[#393280CC] font-semibold p-3'>{character.name}</td>
                    <td className='border border-[#ED553B80] font-medium text-[#393280CC] p-3'>{character.description ? character.description: 'Not Available'}</td>
                    <td >
                        <button className='border border-[#393280] bg-[#393280] text-white rounded p-2 m-2 hover:bg-[white] hover:text-[#393280] text-s' onClick={() => handleClick(parseInt(character.id), character.name)}> {` More Info -> `}</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            } 
        </section>
    );
}