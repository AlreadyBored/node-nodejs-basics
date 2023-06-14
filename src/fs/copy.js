import { readdir, mkdir, stat, copyFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const source = 'files';
  const destination = 'files_copy';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const folderPatch = join(__dirname, source);
  const folderCopyPath = join(__dirname, destination);

  try {
    const files = await readdir(folderPatch);

    try {
      await mkdir(folderCopyPath, { recursive: true });
    } catch (err) {
      console.log(err);
    }

    for (let file of files) {
      let sourcePath = join(folderPatch, file);
      let destinationPath = join(folderCopyPath, file);

      await copyFile(sourcePath, destinationPath);
    }

    console.log('Folder copied successfully.');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
