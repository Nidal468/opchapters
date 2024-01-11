'use client'

import { Rav } from '@/components/part';
import { Adsense6, Adsense4, BidgearAds } from '@/components/ads';
import { useEffect, useState } from 'react'
interface Manga {
    id: string;
    name: string;
    author: string;
    date: string;
    info: string;
    genre1: string;
    genre2: string;
    genre3: string;
    cover: string;
    synopsis: string;
    chapters: Chapter[];
    totalViews: number;
}

interface Chapter {
    id: string;
    title: string;
    date: string;
    number: string;
    viewed: string[];
    images: Image[];
}

interface Image {
    source: string;
}
export default function Chapter(params: any) {
    const { manga, chapter } = params.params;
    const [data, setData] = useState<Manga[]>([])
    const [index, setIndex] = useState(0);
    const [prev, setPrev] = useState(0);
    const [next, setNext] = useState(0);
    const [width, setWidth] = useState('80vw');
    const [height, setHeight] = useState('auto');
    const [max, setMax] = useState(0);
    const selectedManga = data?.find((mangas: any) => mangas.id === manga);
    const selectedChapter = selectedManga?.chapters?.find((chapters: any) => chapters.id === chapter);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://opscanlations.com/api/mangaData', {
                    method: 'GET'
                });
                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                    const selectedManga = result?.find((mangas: any) => mangas.id === manga);
                    
                    if (selectedManga) {
                        const chapterIndex = selectedManga.chapters.findIndex((data: any) => data.id === chapter);
                        setIndex(chapterIndex);
                    } else {
                        console.error('Chapters not found in the result object');
                    }
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {

        setPrev(index as number - 1);
        setNext(index as number + 1);
        setMax(selectedManga?.chapters.length as number)
    }, [chapter, index])

    useEffect(() => {
        if (window.innerWidth > window.innerHeight) {
            setWidth('auto');
            setHeight('100vh')
        } else if (window.innerWidth < window.innerHeight) {
            setWidth('100vw');
            setHeight('auto')
        }
    }, [])

    const prevChapter = index === 0 ? selectedManga?.chapters[0].id : selectedManga?.chapters[prev as number]?.id;
    const nextChapter = index === max as number - 1 ? selectedManga?.chapters[max as number - 1].id : selectedManga?.chapters[next as number]?.id;

    function Height() {
        setWidth('auto');
        setHeight('100vh')

    }
    function Width() {
        setWidth('80vw');
        setHeight('auto')
    }

    if (!selectedChapter?.images) return null
    return (
        <div className="w-full min-h-[200vh] flex flex-col items-center justify-start text-white">
            <div className="w-full h-full flex items-start justify-between lg:pt-[8vw] pt-[14vw]">
                <Rav fitToHeight={Height} fitToWidth={Width} prev={prevChapter} next={nextChapter} manga={manga} name={selectedChapter?.title} chapter={selectedChapter?.number} />
                <div className='w-full min-h-[100vh] p-[1vw] flex flex-col items-center justify-start gap-[1vw]'>
                    <div className='w-full h-[500px]'><Adsense4/></div>
                    {selectedChapter?.images.map((images: any) => (
                        <img style={{ width: width, height: height }} alt={images.source} src={images.source} key={images.source} />
                    ))}
                    <BidgearAds/>
                </div>
            </div>
        </div>
    )
}