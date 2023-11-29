import Image from 'next/image'
import { Nav, Banner, Card, Footer, Sidebar, Menu } from '@/components/part'
import themes from '@/style/themes.module.css'
import FolderIcon from '@mui/icons-material/Folder';
import Data from '@/public/data/manga.json'
export default function Home() {

    return (
        <div className='w-full flex items-center justify-start text-white' id={themes.body}>
            <Sidebar />
            <div className='lg:w-[80%] w-full flex flex-col items-start justify-start gap-[1.5vw] lg:px-[3vw] px-[2vw] gap-[0.5vw] absolute top-0 right-0'>
                <Nav />
                <Menu/>
                <Banner />
                <div className='w-full h-[4vw] flex items-center justify-start gap-[0.5vw]'>
                    <FolderIcon sx={{fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }}/>
                    <h1 className='lg:text-[1.5vw] text-[2vw]'>Manga List</h1>
                </div>
                <div className='w-full flex flex-wrap items-start justify-start gap-[1vw]'>
                    {Data.map((data: any) => (
                        <Card link={data.id} src={data.cover} name={data.name} key={data.id}/>
                    ))}
                </div>
                <Footer/>
            </div>
        </div>
    )
}
