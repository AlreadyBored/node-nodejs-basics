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
    try {
      await access(folderPatch);
    } catch (err) {
      throw new Error('FS operation failed');
    }

    try {
      await access(folderCopyPath);
      throw new Error('FS operation failed files_copy already exist');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw new Error('FS operation failed');
      }
    }

    await mkdir(folderCopyPath, { recursive: true });
    const files = await readdir(folderPatch);

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
