import Image from 'next/image'
import { Nav } from '@/components/part'
import themes from '@/style/themes.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='w-full h-[100vh] flex flex-col' id={themes.background}>
      <Link href="/home">Go to home</Link>
    </div>
  )
}
