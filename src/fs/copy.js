import { readdir, stat, copyFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const sourceFolder = 'files';
const destinationFolder = 'files_copy';

const copy = async () => {
  // Check if the source folder exists
  if (!existsSync(sourceFolder)) {
    throw new Error('FS operation failed: Source folder does not exist');
  }

  // Check if the destination folder already exists
  if (existsSync(destinationFolder)) {
    throw new Error('FS operation failed: Destination folder already exists');
  }

  // Create the destination folder
  await mkdir(destinationFolder);

  // Recursively copy the contents of the source folder to the destination folder
  await copyFolderContents(sourceFolder, destinationFolder);

  console.log('Folder "files" copied successfully to "files_copy".');
};

const copyFolderContents = async (sourcePath, destinationPath) => {
  const files = await readdir(sourcePath);

  for (const file of files) {
    const sourceFile = join(sourcePath, file);
    const destinationFile = join(destinationPath, file);

    const fileStats = await stat(sourceFile);

    if (fileStats.isDirectory()) {
      // If it's a directory, recursively copy its contents
      await copyFolderContents(sourceFile, destinationFile);
    } else {
      // If it's a file, copy it to the destination folder
      await copyFile(sourceFile, destinationFile);
    }
  }
};

// Example usage
await copy();

