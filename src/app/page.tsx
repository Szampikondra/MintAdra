import Image from 'next/image';
import kurwaImg from '../app/kurwa.jpg';
import { addSyntheticTrailingComment } from 'typescript'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
<h3>Mint</h3>   

<Image src={kurwaImg} alt='Picture of the author' />
 </div>
    </main>
  )
}
