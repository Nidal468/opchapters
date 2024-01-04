import Image from 'next/image'
import Data from '@/public/data/manga.json'
import { Pages } from '@/components/part';


export default function Chapter(params: any) {
    const { manga, chapter } = params.params;
    
    return (
        <div className="w-full min-h-[100vh] flex flex-col items-center justify-start text-white">
            <Pages manga={manga} chapter={chapter}/>
        </div>
    )
}