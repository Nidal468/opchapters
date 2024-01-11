import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';
import path from 'path';

const { writeFile, mkdir, readdir } = fs;

const UPLOAD_FOLDER = 'public/images/content';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formData = await req.formData();
        const name = formData.get('name')?.toString();
        const endPoint = formData.get('endPoint')?.toString();
        const title = formData.get('title')?.toString();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded or incorrect field name" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = formData.get('filename')?.toString();;

        let folderPath = '';

        if (!title) {
            folderPath = path.join(process.cwd(), UPLOAD_FOLDER, name as string, `${endPoint as string}`, fileName as string);
        } else {
            folderPath = path.join(process.cwd(), UPLOAD_FOLDER, name as string, `${endPoint as string} - ${title as string}`, fileName as string);
        }

        // Ensure sequential operations using Promise.all
        await Promise.all([
            mkdir(path.dirname(folderPath), { recursive: true }),
            writeFile(folderPath, buffer),
        ]);

        return NextResponse.json({ message: 'File uploaded successfully' });

    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
