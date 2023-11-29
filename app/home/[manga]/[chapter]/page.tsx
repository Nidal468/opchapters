import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Pages } from '@/components/part';
export default function Chapter(params: any) {
    const { manga, chapter } = params.params;
    
    return (
        <div className="w-full h-screen flex items-center justify-start text-white">
            <div className="w-[25vw] h-full bg-zinc-700 flex flex-col items-start justify-start text-[1.5vw] gap-[1vw]">
                <div className='w-full flex items-center justify-start bg-zinc-500 p-[1vw]'>
                    <ArrowBackIosIcon fontSize='medium' />
                </div>
                <div className='w-full flex items-center justify-center flex-col'>
                    <h1>More Features Coming Soon!</h1>
                    <h2>Thank you for your patient</h2>
                </div>
            </div>
            <Pages manga={manga} chapter={chapter}/>
        </div>
    )
}