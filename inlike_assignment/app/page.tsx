'use client';
import {useRouter} from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleChange = () => {
    router.push('/characters')
  }
  return(
    <main className='flex flex-col justify-center items-center h-screen gap-10'>
      <h1 className='text-6xl font-bold text-[#393280]'> Welcome to Inlike Comics</h1>
      <button className='border text-white rounded-full border-[#ED553B] bg-[#ED553B] p-3 text-s font-bold animate-[bounce_3s_infinite_ease-in-out]' 
        onClick={handleChange}>{`Checkout our wide range of Characters ->`}</button>
    </main>
  )
}