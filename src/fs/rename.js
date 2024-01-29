import { promises as fsPromises, existsSync, rename } from 'fs';
import { join } from 'path';

const renameFile = async () => {
  try {
    const sourceFile = 'files/wrongFilename.txt';
    const destinationFile = 'files/properFilename.md';

    if (!existsSync(sourceFile)) {
      throw new Error(`Source file '${sourceFile}' does not exist`);
    }

    if (existsSync(destinationFile)) {
      throw new Error(`Destination file '${destinationFile}' already exists`);
    }

    await fsPromises.rename(sourceFile, destinationFile);

    console.log('File renamed successfully!');
  } catch (error) {
    console.error(`FS operation failed: ${error.message}`);
    throw error;
  }
};

await renameFile();