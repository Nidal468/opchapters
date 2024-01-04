import themes from '@/style/themes.module.css'
import Link from 'next/link'
import {Adsense, Adsense2, Adsense3, BidgearAds} from '@/components/ads';

export default function Home() {
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center text-[5vw] text-white text-center' id={themes.background}>
      <h1>Welcome to OPSCANS</h1>
      <h3 className='text-[3vw]'>A new site is being build so untill then use this</h3>
      <Link href="/home" className='text-[4vw] text-sky-400 hover:text-sky-600'>Go to home</Link>
    </div>
  )
}
