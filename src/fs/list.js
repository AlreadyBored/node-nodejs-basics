import { promises as fsPromises, existsSync, readdir } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const list = async () => {
  const currentFileUrl = import.meta.url;
  const currentFilePath = fileURLToPath(currentFileUrl);
  const folderPath = join(dirname(currentFilePath), 'files');

  try {
    if (!existsSync(folderPath)) {
      throw new Error('FS operation failed: Folder does not exist');
    }

    const fileNames = await fsPromises.readdir(folderPath);

    console.log('Filenames in the "files" folder:', fileNames);
  } catch (error) {
    console.error(`FS operation failed: ${error.message}`);
    throw error;
  }
}

await list();