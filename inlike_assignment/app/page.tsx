'use client';
import {useRouter} from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleChange = () => {
    router.push('/characters')
  }
  return(
    <main>
      <h1 className=''> Welcome to Inlike Marvel Comics </h1>
      <button onClick={handleChange}>Click to continue to checkout the Character's we have</button>
    </main>
  )
}