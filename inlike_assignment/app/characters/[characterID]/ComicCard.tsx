import { Comics } from "@/components/interfaces";
import Image from 'next/image'
import Link from 'next/link'

function FullThing({data, id} : {data: string, id: string}){
    return(
        <h1>Full Thing</h1>
    )
}

export function ComicCard(comic: Comics){
    // Joining the array elements with commas
    const creatorsWithCommas = comic.creators.join(', ');    
    return(
        <div className='border flex flex-col justify-center items-center h-100 p-5 shadow bg-white gap-2'>
            <Image src={comic.thumbnail} alt={comic.title} width={100} height={100}></Image>
            <p className='text-center text-lg font-[Inter] text-[#ED553B] '>Title: {comic.title}</p>
            <p className='text-xs font-[Inter] text-[#393280CC]'>Description: {comic.description? comic.description: 'N/A'}</p>
            <p className='text-xs font-[Inter] text-[#393280CC]'>Price: {comic.price? comic.price: 'N/A'}</p>
            <p className='text-xs font-[Inter] text-[#393280CC]'>Pages: {comic.pageCount? comic.pageCount: 'N/A'}</p>
            <p className='flex flex-wrap text-xs font-[Inter] text-[#393280CC]'>All the Creators: {creatorsWithCommas}</p>
            <button className='border p-2 rounded-full shadow text-center bg-[#ED553B] hover:bg-white group hover:animate-[pulse_5s_infinite]'>
                <Link rel="noopener noreferrer" target="_blank" className='text-xs font-[Inter] text-white font-bold group-hover:text-[#ED553B]' href={comic.furtherDetails}>Further Details</Link>
            </button>
        </div>
    )
}