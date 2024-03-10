import { Comics } from "@/components/interfaces";
import Image from 'next/image'
import Link from 'next/link'
export function ComicCard(comic: Comics){
    // Joining the array elements with commas
    const creatorsWithCommas = comic.creators.join(', ');    
    return(
        <div className='border'>
            <Image src={comic.thumbnail} alt={comic.title} width={100} height={100}></Image>
            <h2>{comic.title}</h2>
            <p>Description: {comic.description? comic.description: 'N/A'}</p>
            <p>Price: {comic.price? comic.price: 'N/A'}</p>
            <p>Pages: {comic.pageCount? comic.pageCount: 'N/A'}</p>
            <p className='flex flex-wrap'>All the Creators: {comic.creators}</p>
            <button>
                <Link href={comic.furtherDetails}>Further Details</Link>
            </button>
        </div>
    )
}