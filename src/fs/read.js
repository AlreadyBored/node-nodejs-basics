import { promises as fsPromises, existsSync } from 'fs';

const read = async () => {
  const filePath = 'files/fileToRead.txt';

  try {
    if (!existsSync(filePath)) {
      throw new Error(`FS operation failed: File '${filePath}' does not exist`);
    }
    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    console.log('Content of "fileToRead.txt":', fileContent);
  } catch (error) {
    console.error(`FS operation failed: ${error.message}`);
    throw error;
  }
};

await read();