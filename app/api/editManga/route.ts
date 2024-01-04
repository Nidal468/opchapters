import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';
import path from 'path';

const { writeFile, mkdir, readFile, unlink } = fs;

const UPLOAD_FOLDER = 'public/images/content';
const DATA_FOLDER = 'public/data';
const COVER_FOLDER = 'public/images/cover';
const FILE_NAME = 'manga.json';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.formData();

        const getFormValue = (fieldName: any, defaultValue = '') =>
            formData.get(fieldName)?.toString() || defaultValue;

        const id = getFormValue('id');
        const name = getFormValue('name');
        const author = getFormValue('author');
        const info = getFormValue('info');
        const genre1 = getFormValue('genre1');
        const genre2 = getFormValue('genre2');
        const genre3 = getFormValue('genre3');
        const cover = getFormValue('cover');
        const synopsis = getFormValue('synopsis');
        const file = formData.get('file') as File;

        const filePath = path.join(DATA_FOLDER, FILE_NAME);
        const existingData = await readFile(filePath, 'utf8');

        let manga = JSON.parse(existingData);

        // Find manga with the same ID
        const existingMangaIndex = manga.findIndex((m: any) => m.id === id);

        if (existingMangaIndex !== -1) {
            const existingManga = manga[existingMangaIndex];
            const oldFolderPath = path.join(UPLOAD_FOLDER, existingManga.name);
            const newFolderPath = path.join(UPLOAD_FOLDER, name);
            await fs.rename(oldFolderPath, newFolderPath);

            if (file) {
                const oldCoverFileName = existingManga.cover;
                const oldCoverPath = join(COVER_FOLDER, oldCoverFileName);
                await unlink(oldCoverPath);
            }
            manga = {
                id,
                name,
                author,
                info,
                genre1,
                genre2,
                genre3,
                cover: cover, // Update with the new cover image name
                synopsis,
            };
        }

        // Write the updated manga data to the file
        await writeFile(filePath, JSON.stringify(manga), 'utf8');


        if (file) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const coverFileName = file.name;
            const coverPath = join(COVER_FOLDER, coverFileName);
            await writeFile(coverPath, buffer);
        }
    } catch (error) {
        console.error('Error adding/updating manga:', error);
        return new Response('Failed to add/update manga', { status: 500 });
    }

    return NextResponse.json('added/updated manga');
}
