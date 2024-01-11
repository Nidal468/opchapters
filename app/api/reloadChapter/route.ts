import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { generateToken } from '@/components/token/page';

const UPLOAD_FOLDER = 'public/images/content';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.formData();
        const mangaId = formData.get('manga')?.toString();
        const dataString = formData.get('data');
        const data = JSON.parse(dataString as string);

        const selectedManga = data.find((item: any) => item.id === mangaId);
        const newChapters = []; // Array to store newly added chapters

        if (selectedManga) {
            const folderPath = path.join(process.cwd(), UPLOAD_FOLDER, selectedManga.name);
            const fileNames = await readFolderContents(folderPath);
            const existingMangaIndex = data.findIndex((item: any) => item.id === mangaId);

            if (existingMangaIndex !== -1) {
                const existingManga = data[existingMangaIndex];

                for (const file of fileNames) {
                    const parts = file.split('-').map((part: any) => part.trim());
                    const number = parts[0];
                    const title = parts[1];

                    const existingChapter = existingManga.chapters.find((c: any) => c.number === number);

                    if (!existingChapter) {
                        const currentDate = new Date();
                        const formattedDate = new Intl.DateTimeFormat('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        }).format(currentDate);

                        const newChapter = {
                            id: generateToken(30),
                            title: title,
                            date: formattedDate,
                            number: number,
                            viewed: []
                        };

                        existingManga.chapters.push(newChapter);
                        newChapters.push(newChapter); // Add the new chapter to the array
                    }
                }
            }
        }

        return NextResponse.json(newChapters);
    } catch (error) {
        console.error('Error:', error);
        // Handle the error appropriately
        return NextResponse.json('Internal Server Error');
    }
}

async function readFolderContents(folderPath: string): Promise<string[]> {
    try {
        const fileNames = await fs.readdir(folderPath);
        return fileNames;
    } catch (error) {
        console.error('Error reading folder contents:', error);
        throw error;
    }
}
