'use client'

import { Nav, Banner, Card, Footer, Sidebar, Menu } from '@/components/part'
import themes from '@/style/themes.module.css'
import FolderIcon from '@mui/icons-material/Folder';
import { Fetch } from '@/components/fetch/page';
import { Adsense6, Adsense5, BidgearAds } from '@/components/ads';

export default function Home() {
    const Data = Fetch();
    return (
        <div className='w-full min-h-[200vh] flex items-center justify-start text-white' id={themes.body}>
            <Sidebar />
            <div className='lg:w-[80%] w-full min-h-screen flex flex-col items-start justify-between gap-[2vw] absolute top-0 right-0'>
                <div className='w-full flex flex-col items-start justify-start lg:gap-[1.5vw] gap-[3vw]'>
                    <Nav />
                    <div className='w-full lg:px-[3vw] px-[2vw]'><Menu /></div>
                    <div className='w-full lg:px-[3vw] px-[2vw]'><Banner /></div>
                    <BidgearAds/>
                    <div className='w-full h-[4vw] flex items-center justify-start gap-[0.5vw] lg:px-[3vw] px-[2vw]'>
                        <FolderIcon sx={{ fontSize: { xs: 14, lg: 20 } }} />
                        <h1 className='lg:text-[1.5vw] text-[2vw]'>Manga List</h1>
                    </div>
                    <div className='w-full flex flex-wrap items-start justify-start gap-[1vw] lg:px-[3vw] px-[2vw] '>
                        {Data?.map((data: any) => (
                            <div className='flex items-center justify-center gap-[1vw]' key={data.id} >
                                <Card link={data.id} src={data.cover} name={data.name} />
                                <Adsense5 />
                            </div>
                        ))}
                    </div>
                    <div className='w-full lg:h-[30vh] h-[15vh]'>
                        <Adsense6/>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
