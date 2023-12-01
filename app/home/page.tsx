import { Nav, Banner, Card, Footer, Sidebar, Menu } from '@/components/part'
import themes from '@/style/themes.module.css'
import FolderIcon from '@mui/icons-material/Folder';
import Data from '@/public/data/manga.json'
export default function Home() {

    return (
        <div className='w-full min-h-screen flex items-center justify-start text-white' id={themes.body}>
            <Sidebar />
            <div className='lg:w-[80%] w-full min-h-screen flex flex-col items-start justify-between gap-[2vw] absolute top-0 right-0'>
                <div className='w-full flex flex-col items-start justify-start lg:gap-[1.5vw] gap-[3vw]'>
                    <Nav />
                    <div className='w-full lg:px-[3vw] px-[2vw]'><Menu /></div>
                    <div className='w-full lg:px-[3vw] px-[2vw]'><Banner /></div>
                    <div className='w-full h-[4vw] flex items-center justify-start gap-[0.5vw] lg:px-[3vw] px-[2vw]'>
                        <FolderIcon sx={{ fontSize: { xs: 12, sm: 16, md: 25, lg: 20, xl: 40 } }} />
                        <h1 className='lg:text-[1.5vw] text-[2vw]'>Manga List</h1>
                    </div>
                    <div className='w-full flex flex-wrap items-start justify-start gap-[1vw] lg:px-[3vw] px-[2vw] '>
                        {Data.map((data: any) => (
                            <Card link={data.id} src={data.cover} name={data.name} key={data.id} />
                        ))}
                    </div>
                    <div className='w-full lg:h-[30vh] h-[15vh]'></div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
