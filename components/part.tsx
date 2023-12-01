'use client'

import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import WidgetsIcon from '@mui/icons-material/Widgets';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
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

type DivStates = {
    div1: boolean;
    div2: boolean;
    div3: boolean;
    div4: boolean;
    div5: boolean;
    div6: boolean;
    div7: boolean;
};

const info = "Hey everybody we are glad that you enjoy our scanlations but, don't forget to support the official version of our chapters or any other official publishing site! We value your suggestions so feel free to join our Discord server and give us feedback! for now just sit back, relax and enjoy some quality manga";
export function Nav() {
    return (
        <div className="w-full h-[3vw] lg:flex items-center justify-between gap-[2vw] hidden lg:px-[3vw] px-[2vw] mt-[2vw]">
            <div className='w-[22vw] h-[80%] relative'>
                <Image fill={true} src={"/images/opscans.png"} alt="" className='object-cover' />
            </div>
            <div className='flex items-center gap-[4vw]'>
                <div className='lg:w-[30vw] h-[2.8vw] flex items-center justify-between rounded-full px-[0.2vw]' id={themes.outer}>
                    <div className='w-[2.4vw] h-[2.4vw] rounded-full flex items-center justify-center'><SearchIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} /></div>
                    <input type='text' placeholder='Enter your search' className='lg:w-[25vw] h-full bg-transparent  outline-0 text-[1vw]' />
                    <div className='w-[2.4vw] h-[2.4vw] rounded-full flex items-center justify-center' id={themes.inner}><CloseIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} /></div>
                </div>
                <div className='h-full gap-[2vw] flex items-center justify-between text-[0.8vw] font-medium'>
                    <div className='flex flex-col items-center justify-between'>
                        <h1>One Piece chapter 1100</h1>
                        <h1 className='text-[0.6vw]'>New Release</h1>
                    </div>
                    <div className='w-[3vw] h-[3vw] rounded-full flex items-center justify-center' id={themes.outer}>
                        <NotificationsActiveOutlinedIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Card(props: any) {
    return (
        <Link href={`/home/${props.link}`}>
            <div className='lg:w-[12vw] lg:h-[21vw] w-[24vw] h-[39vw] flex flex-col items-start justify-start lg:rounded-[0.5vw] rounded-[0.8vw] overflow-hidden' id={themes.card}>
                <div className='w-full lg:h-[18vw] h-[36vw] relative'>
                    <Image fill={true} alt={props.link} src={props.src} />
                </div>
                <div className='w-full lg:h-[3vw] h-[4vw] flex items-center justify-center lg:text-[1vw] text-[2vw]'>
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
        <div className='w-full lg:h-[30vw] h-[50vw] relative'>
            <Image fill={true} src="/images/one.png" alt="hello" className='object-cover z-10' />
            <div className='w-full lg:h-[30vw] h-[50vw] absolute z-20 flex flex-col items-start justify-start px-[5vw]' id={themes.effect}>
                <div className='lg:w-[50vw] w-[70vw] lg:h-[30vw] h-[50vw] flex flex-col items-start justify-center gap-[1.5vw]'>
                    <h1 className='bg-white text-zinc-800 px-[1vw] py-[0.5vw] lg:text-[1vw] text-[2vw] lg:rounded-[0.2vw] rounded-[0.4vw]'>OPSCANS</h1>
                    <div className='flex flex-col'>
                        <h1 className='lg:text-[2.4vw] text-[4vw] font-medium'>WELCOME TO OPSCANS</h1>
                        <h1 className='lg:text-[1.8vw] text-[3vw] font-medium'>HIGH QUALITY SCANS</h1>
                    </div>
                    <p className='lg:text-[1.2vw] text-[2vw]'>{info}</p>
                    <div className='flex flex-col gap-[1vw]'>
                        <h1 className='lg:text-[1vw] text-[3vw]'>OUR BEST MANGAS</h1>
                        <div className='flex items-center gap-[2vw] lg:text-[1vw] text-[2vw]'>
                            <div className='px-[2vw] py-[0.4vw] bg-neutral-100 text-black lg:rounded-[0.2vw] rounded-[0.5vw] hover:bg-neutral-300 duration-300 cursor-pointer'>ONE PIECE</div>
                            <div className='px-[2vw] py-[0.4vw] bg-sky-500 text-white rounded-[0.2vw] lg:rounded-[0.5vw] hover:bg-sky-600 duration-300 cursor-pointer'>BORUTO</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Footer() {
    return (
        <div className='w-full lg:h-[16vw] h-[24vw] flex items-start justify-start'>
            <div className='w-full h-full relative z-10'>
                <Image fill={true} alt="" src="/images/one.png" className='object-cover' />
            </div>
            <div className='w-full lg:h-[16vw] h-[24vw] absolute z-20 flex flex-col items-start justify-center gap-[1vw] px-[2vw]' id={themes.footer}>
                <div className="OpScans text-center text-white font-normal lg:text-[1vw] text-[3vw] leading-tight">OPSCANS</div>
                <div className="FollowUsAt text-center text-white text-opacity-60 lg:text-[0.8vw] text-[2vw] font-normal leading-tight">Follow us at</div>
                <div className="Frame44 opacity-50 justify-start items-center gap-[0.5vw] inline-flex lg:text-[1vw] text-[1.8vw]">
                    <div className="DiscordOpscanCom text-center text-white font-normal  leading-tight"><Link href="https://discord.com/invite/opscans">Discord &</Link></div>
                    <div className="TwitterOpscanCom text-center text-white font-normal  leading-tight"><Link href="https://twitter.com/OPSCANS">Twitter</Link></div>
                    <div className="TwitterOpscanCom text-center text-white font-normal leading-tight"><Link href="https://instagram.com/opscans1?igshid=OGQ5ZDc2ODk2ZA==">Instagram</Link></div>
                </div>
                <div className="CopyrightOpscansComAllRightsReserved text-center text-white text-opacity-60 lg:text-[1vw] text-[2vw] font-normal leading-tight">Copyright © opscans.com. All Rights Reserved</div>
            </div>
        </div>
    )
}
export function List(props: any) {
    return (
        <Link href={`/home/${props.manga}/${props.chapter}`}>
            <div className='lg:w-[10vw] lg:h-[3vw] w-[30vw] h-[8vw] flex flex-col items-center justify-center lg:text-[0.8vw] text-[2vw] bg-zinc-700 hover:bg-zinc-500 duration-300 lg:rounded-[0.3vw] rounded-[0.8vw]'>
                <h1>{props.name}</h1>
                <h3>Chapter {props.number}</h3>
            </div>
        </Link>
    )
}
export function Pages(props: any) {
    const [index, setIndex] = useState(0)
    const [width, setWidth] = useState(700);
    const [height, setHeight] = useState(1050);
    const selectedManga = Data.find((mangas: any) => mangas.id === props.manga);
    const selectedChapter = selectedManga?.chapters.find((chapters: any) => chapters.id === props.chapter);
    const max = selectedChapter?.images.length || 0;

    const findNextPrevChapterIds = (currentChapterId: string) => {
        const chapterIndex = selectedManga?.chapters.findIndex((c) => c.id === currentChapterId);

        if (chapterIndex !== undefined && chapterIndex !== -1) {
            const nextChapterId = selectedManga?.chapters[chapterIndex + 1]?.id || null;
            const prevChapterId = selectedManga?.chapters[chapterIndex - 1]?.id || null;

            return { nextChapterId, prevChapterId };
        }

        return { nextChapterId: null, prevChapterId: null };
    };
    const { nextChapterId, prevChapterId } = findNextPrevChapterIds(props.chapter);
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
    function Zoom() {
        setWidth(prev => prev + 350);
        setHeight(prev => prev + 350);
        if (width === 1050) {
            setWidth(1050)
        }
        if (height === 1400) {
            setHeight(1400)
        }
    }
    function Unzoom() {
        setWidth(prev => prev - 350);
        setHeight(prev => prev - 350);
        if (width === 350) {
            setWidth(350)
        }
        if (height === 700) {
            setHeight(700)
        }
    }
    return (
        <div className="w-full h-full flex items-start justify-between pt-[6vw]">
            <Rav zoom={Zoom} unzoom={Unzoom} prev={prevChapterId} next={nextChapterId} manga={props.manga} name={selectedChapter?.title} chapter={selectedChapter?.number}/>
            <div className='w-[20vw] h-full bg-red-500 flex flex-col items-center justify-start'></div>
            <div className='p-[1vw] flex flex-col items-center justify-start gap-[1vw] bg-zinc-800' style={{ boxShadow: "4px 0px 8px #0b0b0b, -4px 0px 8px #0b0b0b"}}>
                {selectedChapter?.images.map((images: any) => (
                    <div className='w-[auto] h-[auto]' key={images.source}><Image width={width} height={height} alt={images.source} src={images.source} sizes='100vw, 100vw' /></div>
                ))}
            </div>
            <div className='w-[20vw] h-full bg-red-500 flex flex-col items-center justify-start'></div>
            <div className='w-full h-[8vw] fixed bottom-0 right-0 flex items-center justify-between px-[5vw]'>
                <div className='w-[6vw] h-[6vw] flex items-center justify-center opacity-20 hover:opacity-100 duration-300' onClick={Prev}>
                    <ArrowBackIosIcon fontSize='large' />
                </div>

                <div className='w-[6vw] h-[6vw] flex items-center justify-center opacity-20 hover:opacity-100 duration-300 rotate-180' onClick={Next}>
                    <ArrowBackIosIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}
export function Sidebar() {
    const [divStates, setDivStates] = useState<DivStates>({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false,
        div6: false,
        div7: false,
    });
    const toggleDivState = (divKey: keyof DivStates) => {
        setDivStates((prevState) => {
            const updatedState: DivStates = Object.keys(prevState).reduce(
                (acc, key) => ({ ...acc, [key]: key === divKey }),
                {} as DivStates
            );
            return updatedState;
        });
    };
    return (
        <div className='w-[20%] h-full px-[0.5vw] pt-[2vw] lg:flex flex-col items-start justify-start gap-[0.5vw] fixed top-0 left-0 hidden' id={themes.sideBar}>
            <div className='w-full h-[3vw] flex items-center text-[1.5vw] p-[1vw] font-medium gap-[0.5vw]'><WidgetsIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} /><h1>Menu</h1></div>
            <div className='button w-full h-[3vw] flex items-center text-[1.2vw] hover:border-r-2 border-red-500' onClick={() => toggleDivState('div1')} style={{ background: divStates.div1 ? "#52525b" : "" }}>
                <div className='hover:bg-zinc-600 p-[1vw] w-[95%] h-full flex items-center justify-start gap-[0.5vw]'><AutoAwesomeOutlinedIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} /><h1>Home</h1></div>
            </div>
            <div className='button w-full h-[3vw] flex items-center text-[1.2vw] hover:border-r-2 border-red-500' onClick={() => toggleDivState('div2')} style={{ background: divStates.div2 ? "#52525b" : "" }}>
                <div className='hover:bg-zinc-600 p-[1vw] w-[95%] h-full flex items-center justify-start gap-[0.5vw]'><AutoAwesomeOutlinedIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} /><h1>Coming Soon</h1></div>
            </div>
            <div className='button w-full h-[3vw] flex items-center text-[1.2vw] hover:border-r-2 border-red-500' onClick={() => toggleDivState('div3')} style={{ background: divStates.div3 ? "#52525b" : "" }}>
                <div className='hover:bg-zinc-600 p-[1vw] w-[95%] h-full flex items-center justify-start gap-[0.5vw]'><AutoAwesomeOutlinedIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} /><h1>Coming Soon</h1></div>
            </div>
            <div className='button w-full h-[3vw] flex items-center text-[1.2vw] hover:border-r-2 border-red-500' onClick={() => toggleDivState('div4')} style={{ background: divStates.div4 ? "#52525b" : "" }}>
                <div className='hover:bg-zinc-600 p-[1vw] w-[95%] h-full flex items-center justify-start gap-[0.5vw]'><AutoAwesomeOutlinedIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} /><h1>Coming Soon</h1></div>
            </div>
            <div className='button w-full h-[3vw] flex items-center text-[1.2vw] hover:border-r-2 border-red-500' onClick={() => toggleDivState('div5')} style={{ background: divStates.div5 ? "#52525b" : "" }}>
                <div className='hover:bg-zinc-600 p-[1vw] w-[95%] h-full flex items-center justify-start gap-[0.5vw]'><AutoAwesomeOutlinedIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} /><h1>Coming Soon</h1></div>
            </div>
        </div>
    )
}
export function Menu() {
    return (
        <div className='w-full h-[10vw] flex items-center justify-between lg:hidden'>
            <div className='w-[22vw] h-[40%] relative'>
                <Image fill={true} src={"/images/opscans.png"} alt="" className='object-cover' />
            </div>
            <MenuIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} />
        </div>
    )
}
export function Rav(props: any) {
    const { zoom, unzoom , menu} = props;
    const { openChapter, openPage } = props;
    
    return (
        <div className='w-full h-[4vw] px-5 py-2.5 flex justify-between items-center fixed lg:top-0 left-0 bottom-0 z-50 text-white bg-white' style={{ boxShadow: "0px 4px 8px #0b0b0b"}}>
            <div className='flex items-center gap-[2vw]'>
                <div className='w-[150px] h-[35px] flex gap-[30px] items-center justify-center rounded-[3px]' id={themes.outside} onClick={openChapter} >
                    <h1>Chapter 1</h1>
                    <div className={`${props.rotate} duration-500`}><KeyboardArrowDownIcon/></div>
                </div>
                <div className='px-[1vw] py-[0.5vw] gap-[1vw] flex items-center rounded-[0.2vw]' id={themes.outside} onClick={openPage}>
                    <h1>Page 1</h1>
                    <div className={`${props.rotate1} duration-500`}><KeyboardArrowDownIcon/></div>
                </div>
                <div className='flex items-center gap-[1vw]'>
                    <Link href={`/home/${props.manga}/${props.prev}`}>
                    <div className='p-2 rounded-[0.4vw] rotate-90' id={themes.outside}>
                        <KeyboardArrowDownIcon />
                    </div>
                    </Link>
                    <Link href={`/home/${props.manga}/${props.next}`}>
                    <div className='p-2 rounded-[0.4vw] -rotate-90' id={themes.outside}>
                        <KeyboardArrowDownIcon />
                    </div>
                    </Link>
                </div>
                <div className='flex items-center gap-[1vw]'>
                    <div className='p-2 rounded-[0.4vw]' id={themes.outside}>
                        <ZoomInIcon onClick={zoom} />
                    </div>
                    <div className='p-2 rounded-[0.4vw]' id={themes.outside}>
                        <ZoomOutIcon onClick={unzoom} />
                    </div>
                </div>
            </div>
            <h1 className='text-zinc-800 text-[1.5vw]'>Chapter {props.chapter} {props.name}</h1>
            <div className='flex items-center gap-[1vw]'>
                <Link href={`/home/${props.manga}`}>
                <div className='p-2 rounded-[0.4vw] flex items-center justify-end' id={themes.outside}>
                    <ArrowBackIosIcon/>
                </div>
                </Link>
                <div className='p-2 rounded-[0.4vw]' id={themes.outside} onClick={menu}>
                    <MenuIcon />
                </div>
            </div>
        </div>
    )
}