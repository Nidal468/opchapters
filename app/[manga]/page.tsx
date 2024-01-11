'use client'

import Image from 'next/image'
import { Nav, Footer, Menu } from '@/components/part'
import { List } from '@/components/part'
import FolderIcon from '@mui/icons-material/Folder';
import { Adsense6, BidgearAds } from '@/components/ads';
import { Fetch } from '@/components/fetch/page';

export default function Manga(params: any) {
    const data = Fetch();
    const { manga } = params.params;
    const selectedManga = data?.find((mangas: any) => mangas.id === manga);

    return (
        <div className="w-full min-h-[200vh] flex flex-col items-center justify-between text-white">
            <div className='w-full min-h-[100vh] flex flex-col items-center justify-start gap-[2vw] px-[2vw]'>
                <Menu />
                <Nav />
                <div className='w-full lg:h-[20vw] h-[40vw] bg-zinc-700 relative flex items-center justify-center'>
                    <Image fill={true} alt={selectedManga?.cover as string || '/image'} src={selectedManga?.cover as string || '/image'} className='object-cover' sizes='400px, 400px' priority={true}/>
                    <div className='absolute w-full lg:h-[20vw] h-[40vw]'></div>
                </div>
                <div className='w-full flex items-start justify-center absolute lg:top-[15vw] top-[20vw]'>
                    <div className='lg:w-[20vw] lg:h-[30vw] w-[30vw] h-[45vw] relative overflow-hidden lg:rounded=[0.5vw] rounded-[0.4vw]'>
                        <Image fill={true} alt={selectedManga?.cover as string || '/image'} src={selectedManga?.cover as string || '/image'} className='object-cover' sizes='400px, 400px' priority={true}/>
                    </div>
                    <div className='w-[60vw] lg:h-[30vw] h-[45vw] flex items-center'>
                        <div className='w-[60vw] h-[90%] bg-zinc-800 rounded-[0.3vw] overflow-hidden p-[2vw] flex flex-col items-start justify-start lg:gap-[1vw] gap-[2vw]'>
                            <h1 className='lg:text-[2vw] text-[4vw] font-medium'>{selectedManga?.name}</h1>
                            <h2 className='lg:text-[1vw] text-[2vw]'>{selectedManga?.author}</h2>
                            <div className='flex items-center justify-between lg:gap-[1vw] gap-[2vw] lg:text-[0.8vw] text-[1.6vw]'>
                                <div className='lg:px-[1vw] lg:py-[0.3vw] px-[2vw] py-[0.3vw] bg-sky-400 lg:rounded-[0.2vw] rounded-[0.4vw]'>{selectedManga?.genre1}</div>
                                <div className='lg:px-[1vw] lg:py-[0.3vw] px-[2vw] py-[0.3vw] bg-zinc-400 lg:rounded-[0.2vw] rounded-[0.4vw]'>{selectedManga?.genre2}</div>
                                <div className='lg:px-[1vw] lg:py-[0.3vw] px-[2vw] py-[0.3vw] bg-zinc-500 lg:rounded-[0.2vw] rounded-[0.4vw]'>{selectedManga?.genre3}</div>
                            </div>
                            <p className="w-full h-[14vw] text-ellipsis overflow-hidden lg:text-[1vw] text-[1.8vw]">{selectedManga?.info.toString()}</p>
                            <div className='flex items-center justify-center gap-[2vw] lg:text-[1vw] text-[2vw]'>
                                <div className='px-[2vw] py-[0.4vw] bg-neutral-100 text-black lg:rounded-[0.2vw] rounded-[0.4vw] hover:bg-neutral-500 hover:text-white duration-300 cursor-pointer'>First Chapter</div>
                                <div className='px-[2vw] py-[0.4vw] bg-sky-500 text-white lg:rounded-[0.2vw] rounded-[0.4vw] hover:bg-sky-700 duration-300 cursor-pointer'>Latest Chapter</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-start py-[2vw] lg:mt-[24vw] mt-[18vw] font-medium lg:text-[1.5vw] text-[3vw] lg:gap-[0.5vw] gap-[1vw]'><FolderIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} /><h1>Chapter List</h1></div>
                <div className='w-full flex flex-wrap items-start lg:gap-[1vw] gap-[2vw] justify-start mb-[5vw]'>
                    {selectedManga?.chapters.map((data: any, index: number) => (
                        <div key={index}><List manga={manga} chapter={data.id} name={data.title} number={data.number} /></div>
                    ))}
                </div>
                <Adsense6/>
            </div>
            <BidgearAds/>
            <Footer />
        </div>
    )
}