import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

const { writeFile } = fs;

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const coverFileName = file.name;
        const coverPath = join('public/images/cover', coverFileName);
        await writeFile(coverPath, buffer);
        
    } catch (error) {
        console.error('Error adding manga:', error);
        return new Response('Failed to add manga', { status: 500 });
    }
    return NextResponse.json('added manga');
}