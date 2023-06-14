import { readdir, mkdir, stat, copyFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const source = 'files';
  const destination = 'files_copy';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const folderPatch = join(__dirname, source);

  try {
    const files = await readdir(folderPatch);
    await mkdir(destination, { recursive: true });

    for (let file of files) {
      let sourcePath = join(source, file);
      let destinationPath = join(destination, file);

      await copyFile(sourcePath, destinationPath);
    }

    console.log('Folder copied successfully.');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
