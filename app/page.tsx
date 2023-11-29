import Image from 'next/image'
import { Nav, Card, SwiperCards } from '@/components/part'
import themes from '@/style/themes.module.css'
export default function Home() {
  return (
    <div className='w-full h-[100vh] flex flex-col' id={themes.background}>
      <Nav />
      
    </div>
  )
}
