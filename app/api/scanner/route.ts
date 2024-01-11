import { promises as fs, readdir } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();
    const manga = formData.get('manga')?.toString();
    const chapters = formData.get('chapters')?.toString();
    const name = formData.get('name')?.toString();
    const number = formData.get('number')?.toString();
    const title = formData.get('title')?.toString();
    // Check if manga and chapters are defined and of type string
    if (!name || !number) {
      throw new Error('Invalid manga or chapters values');
    }
    const folderPath = path.join(process.cwd(), 'public/images/content', name, `${number} - ${title}`);
    const fileNames = await readFolderContents(folderPath);

    const mangaList = {
      id: manga,
      chapters: [
        {
          id: chapters,
          images: fileNames.map((fileName: string) => ({
            source: path.posix.join('/images/content', name, `${number} - ${title}`, fileName),
          })),
        },
      ],
    };



    return NextResponse.json(mangaList);
  } catch (error) {
    console.error('Error scanning files:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
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
