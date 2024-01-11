import { NextRequest, NextResponse } from 'next/server';
import { promises as fs, existsSync, readdirSync } from 'fs';
import path from 'path';

const UPLOAD_FOLDER = 'public/images/content';

export async function POST(req: NextRequest, res: NextResponse) {
  try {

    const body = await req.formData();
    const name = body.get('name')?.toString();
    const number = body.get('number')?.toString();
    const title = body.get('title')?.toString();

    let folderPath = '';

    if (!title) {
      folderPath = path.join(process.cwd(), UPLOAD_FOLDER, name as string, `${number as string}`);
    } else {
      folderPath = path.join(process.cwd(), UPLOAD_FOLDER, name as string, `${number as string} - ${title as string}`);
    }



    // Check if the folder exists before attempting to delete
    if (existsSync(folderPath)) {
      // Delete the folder and its contents
      await deleteFolderRecursive(folderPath);
    }

    // Write the updated data back to the file



    return NextResponse.json('deleted', { status : 200 })
  } catch (error) {
    console.error('Error deleting chapter:', error);
    return NextResponse.json('Failed to delete chapter', { status: 500 });
  }
}

// Helper function to delete a folder and its contents recursively
async function deleteFolderRecursive(folderPath: string): Promise<void> {
  const files = readdirSync(folderPath);
  for (const file of files) {
    const currentPath = path.join(folderPath, file);
    const isDirectory = (await fs.stat(currentPath)).isDirectory();

    if (isDirectory) {
      await deleteFolderRecursive(currentPath);
    } else {
      await fs.unlink(currentPath);
    }
  }

  // Remove the empty folder
  await fs.rmdir(folderPath);
}
