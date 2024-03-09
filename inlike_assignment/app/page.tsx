import Image from "next/image";
import crypto from "crypto";

export default function Home() {
  const timestamp = new Date().getTime().toString()
  const publicKey = process.env.PUBLIC_KEY!
  const privateKey = process.env.PRIVATE_KEY!
  const hash = crypto.createHash('md5').update(timestamp + privateKey + publicKey).digest("hex")
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  
  return (
    <main>
      
    </main>
  );
}
