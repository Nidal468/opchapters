'use client'

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

import { useState , useEffect } from 'react';

export function Fetch() {
    const [data, setData] = useState<Manga[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://opscanlations.com/api/mangaData', {
                    method: 'GET'
                }); // Replace with your actual API endpoint
                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return data
}