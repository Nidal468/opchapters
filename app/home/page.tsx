import Image from 'next/image'
import { Nav, Banner, Card, Footer } from '@/components/part'
import themes from '@/style/themes.module.css'
import FolderIcon from '@mui/icons-material/Folder';
import Data from '@/public/data/manga.json'
export default function Home() {
    
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-[2vw] text-white'>
            <Nav />
            <Banner />
            <div className='w-full flex flex-col gap-[2vw] text-white my-[4vw]'>
                <div className='w-full px-[2vw] flex items-center justify-start'>
                    <div className='flex items-center gap-[1vw]'>
                        <FolderIcon fontSize='small'/>
                        <h1 className='text-[1.5vw]'>Manga List</h1>
                    </div>
                </div>
                <div className='w-full flex flex-wrap gap-[2vw] px-[2vw]'>
                    {Data.map((data: any) => (
                        <Card link={data.id} src={data.name} name={data.name}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
