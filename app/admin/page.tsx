'use client'
import { useState } from "react";
import Add from '@mui/icons-material/Add';
import { AddManga, AddChapter } from '@/components/form';
import Image from 'next/image'
import data from '@/public/data/manga.json'
export default function Admin() {
    const [display, setDisplay] = useState(false);
    const Display = display ? "flex" : "none";
    const [id, setId] = useState("")
    
    return (
        <div className="w-full h-screen flex items-start justify-center bg-zinc-900 text-white">
            <div className="w-[25vw] h-full bg-zinc-700">
                <div className="w-full h-[4vw] bg-zinc-600 flex items-center justify-between px-[2vw]">
                    <h1>Manga List</h1>
                    <div onClick={() => setDisplay(true)}><Add /></div>
                </div>
                {data.map((data: any) => (
                    <div className="w-full flex items-center justify-between p-[1vw] bg-gray-800" key={data.id} onClick={() => setId(data.id)}>
                        <div className="w-[6vw] h-[9vw] relative">
                            <Image src={data.cover} alt={data.name} fill={true} />
                        </div>
                        <h1>{data.name}</h1>
                    </div>
                ))}
            </div>
            <div className="w-[75vw] h-full bg-zinc-800 flex items-start justify-center">
                <AddManga Display={Display} close={() => setDisplay(false)} />
                <AddChapter id={id}/>
            </div>
        </div>
    )
}