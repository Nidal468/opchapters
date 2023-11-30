import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Pages } from '@/components/part';
export default function Chapter(params: any) {
    const { manga, chapter } = params.params;
    
    return (
        <div className="w-full h-screen flex items-center justify-start text-white">
            <Pages manga={manga} chapter={chapter}/>
        </div>
    )
}