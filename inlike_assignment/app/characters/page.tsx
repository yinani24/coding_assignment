'use client';

import { urls } from "@/components/constants";
import {useEffect, useState} from "react";
import { GetCharacters } from "@/app/api/route";
import { Character } from "@/components/interfaces";
import {useRouter} from 'next/navigation'

export default function Characters() {
    const [characters, setCharacters] = useState([])
    const router = useRouter()
    useEffect(() =>{
        async function fetchData(){
        const data = await GetCharacters({url: urls.characters, id:'', secondary:''})
        setCharacters(data)
        }
        fetchData()
    },[])

    const handleClick = (id: number) => {
        router.push(`/characters/${id}`)
    }
    return (
        <section className='flex justify-center items-center'>
        {characters && characters.length > 0 && 
            <table className='w-4/5'>
            <thead>
                <tr className='border'>
                    <th className=''>Name</th>
                    <th>Description</th>
                    <th> Click </th>
                </tr>
            </thead>        
            <tbody>
                {characters.map((character: Character) => (
                <tr className="border">
                    <td>{character.name}</td>
                    <td>{character.description}</td>
                    <td>
                        <button onClick={() => handleClick(parseInt(character.id))}> click Me</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            } 
        </section>
    );
}