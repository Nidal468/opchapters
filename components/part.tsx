'use client'

import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { useState } from 'react'
import Data from '@/public/data/manga.json'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import themes from '@/style/themes.module.css'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import Link from 'next/link'
const info = "Hey everybody we are glad that you enjoy our scanlations but, don't forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back, relax and enjoy some quality manga";
export function Nav() {
    return (
        <div className="w-full h-[4.5vw] lg:flex items-center justify-between gap-[2vw] hidden">
            <div className='w-[22vw] h-[80%] relative'>
                <Image fill={true} src={"/images/opscans.png"} alt="" className='object-cover' />
            </div>
            <div className='flex items-center gap-[4vw]'>
                <div className='lg:w-[30vw] h-[2.8vw] flex items-center justify-between rounded-full px-[0.2vw]' id={themes.outer}>
                    <div className='w-[2.4vw] h-[2.4vw] rounded-full flex items-center justify-center'><SearchIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/></div>
                    <input type='text' placeholder='Enter your search' className='lg:w-[25vw] h-full bg-transparent  outline-0 text-[1vw]' />
                    <div className='w-[2.4vw] h-[2.4vw] rounded-full flex items-center justify-center' id={themes.inner}><CloseIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/></div>
                </div>
                <div className='h-full gap-[2vw] flex items-center justify-between text-[0.8vw] font-medium'>
                    <div className='flex flex-col items-center justify-between'>
                        <h1>One Piece chapter 1100</h1>
                        <h1 className='text-[0.6vw]'>New Release</h1>
                    </div>
                    <div className='w-[3vw] h-[3vw] rounded-full flex items-center justify-center' id={themes.outer}>
                        <NotificationsActiveOutlinedIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Card(props: any) {
    return (
        <Link href={`/home/${props.link}`}>
            <div className='lg:w-[12vw] lg:h-[21vw] w-[18vw] h-[28vw] flex flex-col items-start justify-start lg:rounded-[0.5vw] rounded-[0.8vw] overflow-hidden' id={themes.card}>
                <div className='w-full lg:h-[18vw] h-[24vw] relative'>
                    <Image fill={true} alt={props.link} src={props.src} />
                </div>
                <div className='w-full lg:h-[3vw] h-[4vw] flex items-center justify-center lg:text-[1vw] text-[1.5vw]'>
                    <h1>{props.name}</h1>
                </div>
            </div>
        </Link>
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
            <Image fill={true} src="/images/one.png" alt="hello" className='object-cover z-10' />
            <div className='w-full h-[30vw] absolute z-20 flex flex-col items-start justify-start px-[5vw]' id={themes.effect}>
                <div className='w-[50vw] h-[30vw] flex flex-col items-start justify-center gap-[1.5vw]'>
                    <h1 className='bg-white text-zinc-800 px-[1vw] py-[0.5vw] text-[1vw] lg:rounded-[0.2vw] rounded-[0.4vw]'>OPSCANS</h1>
                    <div className='flex flex-col'>
                        <h1 className='text-[2.4vw] font-medium'>WELCOME TO OPSCANS</h1>
                        <h1 className='text-[1.8vw] font-medium'>HIGH QUALITY SCANS</h1>
                    </div>
                    <p className='text-[1.2vw]'>{info}</p>
                    <div className='flex flex-col gap-[1vw]'>
                        <h1 className='text-[1vw]'>OUR BEST MANGAS</h1>
                        <div className='flex items-center gap-[10px] text-[1vw]'>
                            <div className='px-[2vw] py-[0.4vw] bg-neutral-100 text-black lg:rounded-[0.2vw] rounded-[0.3vw] hover:bg-neutral-300 duration-300 cursor-pointer'>ONE PIECE</div>
                            <div className='px-[2vw] py-[0.4vw] bg-sky-500 text-white rounded-[0.2vw] lg:rounded-[0.3vw] hover:bg-sky-600 duration-300 cursor-pointer'>BORUTO</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Footer() {
    return (
        <footer className='w-full h-[16vw] flex items-start justify-start'>
            <div className='w-full h-full relative z-10'>
                <Image fill={true} alt="" src="/images/one.png" className='object-cover' />
            </div>
            <div className='w-full h-[16vw] absolute z-20 flex flex-col items-start justify-center gap-[1vw] px-[2vw]' id={themes.footer}>
                <div className="OpScans text-center text-white font-normal lg:text-[1vw] text-[2vw] leading-tight">OPSCANS</div>
                <div className="FollowUsAt text-center text-white text-opacity-60 lg:text-[0.8vw] text-[1.2vw] font-normal leading-tight">Follow us at</div>
                <div className="Frame44 opacity-50 justify-start items-center gap-[0.5vw] inline-flex lg:text-[1vw] text-[1.2vw]">
                    <div className="DiscordOpscanCom text-center text-white font-normal  leading-tight"><Link href="https://discord.com/invite/opscans">Discord &</Link></div>
                    <div className="TwitterOpscanCom text-center text-white font-normal  leading-tight"><Link href="https://twitter.com/OPSCANS">Twitter</Link></div>
                    <div className="TwitterOpscanCom text-center text-white font-normal leading-tight"><Link href="https://instagram.com/opscans1?igshid=OGQ5ZDc2ODk2ZA==">Instagram</Link></div>
                </div>
                <div className="CopyrightOpscansComAllRightsReserved text-center text-white text-opacity-60 lg:text-[1vw] text-[1.4vw] font-normal leading-tight">Copyright © opscans.com. All Rights Reserved</div>
            </div>
        </footer>
    )
}
export function List(props: any) {
    return (
        <Link href={`/home/${props.manga}/${props.chapter}`}>
            <div className='w-[10vw] h-[3vw] flex flex-col items-center justify-center text-[0.8vw] bg-zinc-700 rounded-[0.3vw]'>
                <h1>{props.name}</h1>
                <h3>Chapter {props.number}</h3>
            </div>
        </Link>
    )
}
export function Pages(props: any) {
    const [index, setIndex] = useState(0)
    const selectedManga = Data.find((mangas: any) => mangas.id === props.manga);
    const selectedChapter = selectedManga?.chapters.find((chapters: any) => chapters.id === props.chapter);
    const max = selectedChapter?.images.length || 0;

    function Prev() {
        if (index === 0) {
            setIndex(0)
        } else {
            setIndex(prev => prev - 1)
        }
    }
    function Next() {
        if (index === max - 1) {
            setIndex(max - 1)
        } else {
            setIndex(prev => prev + 1)
        }
    }
    return (
        <div className="w-[75%] h-full bg-zinc-800 flex items-center justify-center">
            <h1 className='absolute top-[4%] right-[4%] text-[2vw]'>{index + 1} / {max}</h1>
            <div className={`w-[65vh] h-[90vh] relative`}>
                <Image fill={true} alt={`${selectedChapter?.images[index].source}`} src={`${selectedChapter?.images[index].source}`} sizes='100vw, 100vw' key={`${selectedChapter?.images[index].source}`} />

            </div>
            <div className='w-[75vw] h-[8vw] absolute bottom-0 right-0 flex items-center justify-between px-[5vw]'>
                <div className='w-[6vw] h-[6vw] flex items-center justify-center opacity-0 hover:opacity-100 duration-300' onClick={Prev}>
                    <ArrowBackIosIcon fontSize='large' />
                </div>

                <div className='w-[6vw] h-[6vw] flex items-center justify-center opacity-0 hover:opacity-100 duration-300 rotate-180' onClick={Next}>
                    <ArrowBackIosIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}
export function Sidebar() {
    return (
        <div className='w-[20%] h-full px-[0.5vw] pt-[2vw] lg:flex flex-col items-start justify-start gap-[0.5vw] fixed top-0 left-0 hidden' id={themes.sideBar}>
            <div className='w-full h-[3vw] flex items-center text-[1.5vw] p-[1vw] font-medium gap-[0.5vw]'><WidgetsIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/><h1>Menu</h1></div>
            <div className='w-full h-[3vw] flex items-center text-[1.2vw] hover:border-r-2 border-red-500'>
                <div className='hover:bg-zinc-600 p-[1vw] w-[95%] h-full flex items-center justify-start gap-[0.5vw]'><AutoAwesomeOutlinedIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/><h1>Home</h1></div>
            </div>
            <div className='w-full h-[3vw] flex items-center text-[1.2vw] hover:border-r-2 border-red-500'>
                <div className='hover:bg-zinc-600 p-[1vw] w-[95%] h-full flex items-center justify-start gap-[0.5vw]'><AutoAwesomeOutlinedIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/><h1>Collection</h1></div>
            </div>
            <div className='w-full h-[3vw] flex items-center text-[1.2vw] hover:border-r-2 border-red-500'>
                <div className='hover:bg-zinc-600 p-[1vw] w-[95%] h-full flex items-center justify-start gap-[0.5vw]'><AutoAwesomeOutlinedIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/><h1>Coming Soon</h1></div>
            </div>
            <div className='w-full h-[3vw] flex items-center text-[1.2vw] hover:border-r-2 border-red-500'>
                <div className='hover:bg-zinc-600 p-[1vw] w-[95%] h-full flex items-center justify-start gap-[0.5vw]'><AutoAwesomeOutlinedIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/><h1>Coming Soon</h1></div>
            </div>
            <div className='w-full h-[3vw] flex items-center text-[1.2vw] hover:border-r-2 border-red-500'>
                <div className='hover:bg-zinc-600 p-[1vw] w-[95%] h-full flex items-center justify-start gap-[0.5vw]'><AutoAwesomeOutlinedIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/><h1>Coming Soon</h1></div>
            </div>
        </div>
    )
}
export function Menu() {
    return(
        <div className='w-full h-[10vw] flex items-center justify-between lg:hidden'>
            <div className='w-[22vw] h-[40%] relative'>
                <Image fill={true} src={"/images/opscans.png"} alt="" className='object-cover' />
            </div>
            <MenuIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/>
        </div>
    )
}