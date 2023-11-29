import Image from 'next/image'
import { Nav, Banner, Card, Footer } from '@/components/part'
import themes from '@/style/themes.module.css'
import { List } from '@/components/part'
import Data from '@/public/data/manga.json'
export default function Manga(params: any) {
    const { manga, chapter } = params.params;
    const selectedManga = Data.find((mangas: any) => mangas.id === manga);
    
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start text-white">
            <Nav />
            <div className='w-full h-[20vw] bg-zinc-700 relative flex items-center justify-center'>
                <Image fill={true} alt="" src="/images/one.png" className='object-cover' />
                <div className='absolute w-full h-[20vw]' id={themes.opacity}></div>
            </div>
            <div className='w-full flex items-start justify-center absolute top-[15vw]'>
                <div className='w-[20vw] h-[30vw] relative rounded-[0.3vw] overflow-hidden'>
                    <Image fill={true} alt="" src="/images/cover/one-piece.jpg" className='object-cover' />
                </div>
                <div className='w-[60vw] h-[30vw] flex items-center'>
                    <div className='w-[60vw] h-[90%] bg-zinc-800 rounded-[0.3vw] overflow-hidden p-[2vw] flex flex-col items-start justify-start gap-[1vw]'>
                        <h1 className='text-[2vw] font-medium'>One Piece</h1>
                        <h2 className='text-[1vw]'>Echiro Oda</h2>
                        <div className='flex items-center justify-between gap-[1vw] text-[0.8vw]'>
                            <div className='px-[1vw] py-[0.3vw] bg-sky-400 rounded-[0.2vw]'>Action</div>
                            <div className='px-[1vw] py-[0.3vw] bg-zinc-400 rounded-[0.2vw]'>Action</div>
                            <div className='px-[1vw] py-[0.3vw] bg-zinc-500 rounded-[0.2vw]'>Action</div>
                        </div>
                        <p className="w-full h-[10vw] text-ellipsis overflow-hidden text-[1vw]">As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer \"Red-Haired\" Shanks. But Luffy's life changed when he accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber...at the cost of never being able to swim again! Years later, still vowing to become the king of the pirates, Luffy sets out on his adventure...one guy alone in a rowboat, in search of the legendary \"One Piece,\" said to be the greatest treasure in the world</p>
                        <div className='flex items-center justify-center gap-[2vw]'>
                            <div className='px-[2vw] py-[0.4vw] bg-neutral-100 text-black rounded-[4px] hover:bg-neutral-500 hover:text-white duration-300 cursor-pointer'>First Chapter</div>
                            <div className='px-[2vw] py-[0.4vw] bg-sky-500 text-white rounded-[4px] hover:bg-sky-700 duration-300 cursor-pointer'>Latest Chapter</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-start w-[80vw] py-[2vw] mt-[24vw] font-medium text-[2vw]'>Chapter List</div>
            <div className='w-[80vw] flex flex-wrap items-start gap-[1vw] justify-start mb-[5vw]'>
               {selectedManga?.chapters.map((data: any) => (
                    <div key={data.id}><List manga={manga} chapter={data.id} name={data.title} number={data.number}/></div>
               ))} 
            </div>
            <Footer/>
        </div>
    )
}