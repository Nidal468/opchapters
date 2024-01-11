import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.json();
        const { number, name , title} = formData;

        const UPLOAD_FOLDER = 'public/images/content';
        let folderPath = '';

        if (!title) {
            folderPath = path.join(process.cwd(), UPLOAD_FOLDER, name as string, `${number as string}`);
        } else {
            folderPath = path.join(process.cwd(), UPLOAD_FOLDER, name as string, `${number as string} - ${title as string}`);
        }
        await fs.mkdir(folderPath, { recursive: true });
        return NextResponse.json('added Folder', { status: 200 })
    } catch (error) {
        // Handle errors and return an appropriate response
        console.error('Error adding chapter:', error);
        return new Response('Failed to add chapter', { status: 500 });
    }
}