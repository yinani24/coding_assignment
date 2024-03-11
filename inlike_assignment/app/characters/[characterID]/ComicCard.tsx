import { Comics } from "@/components/interfaces";
import Image from 'next/image'
import Link from 'next/link'

function Double({main, secondary, color, text="text-xs", font="font-[Inter]"}: {main: string, secondary: string, color: string, text?: string, font?: string}){
    return(
        <div className='flex flex-row gap-2'>
            <p className={`${text} text-left ${font} font-bold ${color}`}>{main}</p>
            <p className={`${text} ${font} text-wrap ${color}`}>{secondary}</p>
        </div>
    )
}

export function ComicCard(comic: Comics){
    // Joining the array elements with commas
    const creatorsWithCommas = comic.creators.join(', ');    
    return(
        <div className='border flex flex-col justify-center items-center p-5 shadow bg-white gap-2'>
            <Image src={comic.thumbnail} alt={comic.title} width={200} height={100}></Image>
            <Double main='Title:' secondary={comic.title} color="text-[#ED553B]" text="text-lg" font="font-mono"/>
            {/* <p className='text-center text-lg font-mono text-[#ED553B] '>Title: {comic.title}</p> */}
            <Double main='Description:' secondary={comic.description? comic.description: 'Not Available'} color="text-[#393280CC]"/>
            {/* <p className='text-xs font-[Inter] text-[#393280CC]'>Description: {comic.description? comic.description: 'Not Available'}</p> */}
            <div className='flex justify-start w-full'>
                <Double main='Price:' secondary={comic.price.toString()? comic.price.toString(): 'Not Available'} color="text-[#393280CC]"/>
            </div>
            {/* <p className='text-xs font-[Inter] text-[#393280CC]'>Price: {comic.price? comic.price: 'Not Available'}</p> */}
            <div className="flex justify-start w-full">
                <Double main='Pages:' secondary={comic.pageCount? comic.pageCount.toString(): 'Not Available'} color="text-[#393280CC]"/>
            </div>
            {/* <p className='text-xs font-[Inter] text-[#393280CC]'>Pages: {comic.pageCount? comic.pageCount: 'Not Available'}</p> */}
            <Double main='Creators:' secondary={creatorsWithCommas} color="text-[#393280CC]"/>
            {/* <p className='flex flex-wrap text-xs font-[Inter] text-[#393280CC]'>All the Creators: {creatorsWithCommas}</p> */}
            <button className='border border-[#ED553B] p-2 rounded-2xl shadow shadow-[#ED553B] text-center bg-[#ED553B] hover:bg-white group hover:animate-[pulse_5s_infinite]'>
                <Link rel="noopener noreferrer" target="_blank" className='text-xs font-sans text-white font-bold group-hover:text-[#ED553B]' href={comic.furtherDetails}>Further Details</Link>
            </button>
        </div>
    )
}