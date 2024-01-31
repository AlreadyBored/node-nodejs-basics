import { readFile } from 'fs/promises';
import { join } from 'path';

const read = async () => {
  const filenameToRead = 'fileToRead.txt';

  const currentDir = process.cwd();
  const filePathToRead = join(currentDir, filenameToRead);

  // Read and print the content of the file if it exists
  try {
    const content = await readFile(filePathToRead, 'utf-8');
    console.log(`Content of "${filenameToRead}":\n${content}`);
  } catch (fileError) {
    if (fileError.code === 'ENOENT') {
      console.error(`FS operation failed: File "${filenameToRead}" does not exist`);
    } else {
      console.error(`FS operation failed: ${fileError.message}`);
    }
  }
};

// Example usage
await read();
