import { promises as fsPromises, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  try {
    const sourceFile = join(__dirname, 'files', 'wrongFilename.txt');
    const destinationFile = join(__dirname, 'files', 'properFilename.md');

    if (!existsSync(sourceFile)) {
      console.log(`Source file '${sourceFile}' does not exist. Unable to rename.`);
      return; // Return early, as there's no error in this case
    }

    if (existsSync(destinationFile)) {
      console.log(`Destination file '${destinationFile}' already exists. Unable to rename.`);
      return; // Return early, as there's no error in this case
    }

    await fsPromises.rename(sourceFile, destinationFile);

    console.log('File renamed successfully!');
  } catch (error) {
    console.error(`FS operation failed: ${error.message}`);
    throw error;
  }
};

await rename();