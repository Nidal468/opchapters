'use client'

import MenuIcon from '@mui/icons-material/Menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import themes from '@/style/themes.module.css'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import Link from 'next/link'
export function Nav() {
    return (
        <div className="w-full h-[4vw] flex items-center justify-between pr-[2vw]" id={themes.box}>
            <div className='lg:w-[23vw] h-full relative'>
                <Image src="/images/bg.png" fill={true} alt="" className='object-cover' />
            </div>
            <div className='gap-[1vw] h-full flex items-center justify-between text-[1vw]' id={themes.dim}>
                <Link href="/home"><h1>Home</h1></Link>
                <Link href="/"><h1>Collections</h1></Link>
                <Link href="/"><h1>Contact Us</h1></Link>
            </div>
            <div className='lg:w-[30vw] h-[2.8vw] flex items-center justify-between rounded-full px-[0.2vw]' id={themes.outer}>
                <div className='w-[2.4vw] h-[2.4vw] rounded-full flex items-center justify-center'><SearchIcon fontSize='small' /></div>
                <input type='text' placeholder='Enter your search' className='lg:w-[25vw] h-full bg-transparent  outline-0 text-[1vw]' />
                <div className='w-[2.4vw] h-[2.4vw] rounded-full flex items-center justify-center' id={themes.inner}><CloseIcon fontSize='small' /></div>
            </div>
            <div className='h-full gap-[2vw] flex items-center justify-between text-[0.8vw] font-medium'>
                <div className='flex flex-col items-center justify-between'>
                    <h1>One Piece chapter 1100</h1>
                    <h1 className='text-[0.6vw]'>New Release</h1>
                </div>
                <div className='w-[3vw] h-[3vw] rounded-full flex items-center justify-center' id={themes.outer}>
                    <NotificationsActiveOutlinedIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}
export function Card() {
    return (
        <div className='w-[12vw] h-[21vw] flex flex-col items-start justify-start rounded-[0.5vw] overflow-hidden' id={themes.card}>
            <div className='w-full h-[18vw] relative'>
                <Image fill={true} alt="" src={"/images/cover/one-piece.jpg"} />
            </div>
            <div className='w-full h-[3vw] flex items-center justify-center text-[1vw] p-[0.3vw]'>
                <h1>One Piece</h1>
            </div>
        </div>
    )
}
export function SwiperCards() {
    return (
        <Swiper

            slidesPerView={2}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={0}
            modules={[EffectCoverflow]}
            coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: true,
            }}
            className="w-[95%]">
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
            <SwiperSlide><Card /></SwiperSlide>
        </Swiper>
    )
}
export function Banner() {
    return (
        <div className='w-full h-[30vw] relative'>
            <Image fill={true} src="/images/one.png" alt="" className='object-cover z-10' />
            <div className='w-full h-[30vw] absolute z-20 flex flex-col items-start justify-start px-[5vw]' id={themes.effect}>
                <div className='w-[50vw] h-[30vw] flex flex-col items-start justify-center gap-[1.5vw]'>
                    <h1 className='bg-white text-zinc-800 px-[10px] py-[5px] text-[1vw] rounded-[0.2vw]'>OPSCANS</h1>
                    <div className='flex flex-col'>
                        <h1 className='text-[2.4vw] font-medium'>WELCOME TO OPSCANS</h1>
                        <h1 className='text-[1.8vw] font-medium'>HIGH QUALITY SCANS</h1>
                    </div>
                    <p className='text-[1.2vw]'>Hey everybody we are glad that you enjoy our scanlations but, don't forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back, relax and enjoy some quality manga</p>
                    <div className='flex flex-col gap-[1vw]'>
                        <h1 className='text-[1vw]'>OUR BEST MANGAS</h1>
                        <div className='flex items-center gap-[10px] text-[1vw]'>
                            <div className='px-[2vw] py-[0.4vw] bg-neutral-100 text-black rounded-[4px] hover:bg-neutral-300 duration-300 cursor-pointer'>ONE PIECE</div>
                            <div className='px-[2vw] py-[0.4vw] bg-sky-500 text-white rounded-[4px] hover:bg-sky-600 duration-300 cursor-pointer'>BORUTO</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Footer() {
    return (
        <div className='lg:w-full h-[16vw] flex items-start justify-start'>
            <div className='w-full h-full relative z-10'>
                <Image fill={true} alt="" src="/images/one.png" className='object-cover'/>
            </div>
            <div className='w-full h-[16vw] absolute z-20 flex flex-col items-start justify-center gap-[1vw] px-[2vw]' id={themes.footer}>
                <div className="OpScans text-center text-white font-normal text-[1vw] leading-tight">OPSCANS</div>
                <div className="FollowUsAt text-center text-white text-opacity-60 text-[0.8vw] font-normal leading-tight">Follow us at</div>
                <div className="Frame44 opacity-50 justify-start items-center gap-[0.5vw] inline-flex text-[1vw]">
                    <div className="DiscordOpscanCom text-center text-white font-normal  leading-tight"><Link href="https://discord.com/invite/opscans">Discord &</Link></div>
                    <div className="TwitterOpscanCom text-center text-white font-normal  leading-tight"><Link href="https://twitter.com/OPSCANS">Twitter</Link></div>
                    <div className="TwitterOpscanCom text-center text-white font-normal leading-tight"><Link href="https://instagram.com/opscans1?igshid=OGQ5ZDc2ODk2ZA==">Instagram</Link></div>
                </div>
                <div className="CopyrightOpscansComAllRightsReserved text-center text-white text-opacity-60 text-[1vw] font-normal leading-tight">Copyright © opscans.com. All Rights Reserved</div>
            </div>
        </div>
    )
}