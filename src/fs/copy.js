import { copyFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const folderPath = new URL('files', import.meta.url);
const folderCopyPath = new URL('files_copy', import.meta.url);
const errorMessage = 'FS operation failed';

const copy = async () => {
  try {
    const files = await readdir(folderPath);
    await mkdir(folderCopyPath);
    files.map(async (file) => {
      const filePath = new URL(path.join('files', file), import.meta.url);
      const fileCopyPath = new URL(
        path.join('files_copy', file),
        import.meta.url
      );
      await copyFile(filePath, fileCopyPath);
    });
  } catch {
    throw new Error(errorMessage);
  }
};

await copy();
