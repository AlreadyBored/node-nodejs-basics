import { promises as fsPromises, existsSync, unlink } from 'fs';

async function remove() {
  try {
    const filePath = 'files/fileToRemove.txt';

    if (!existsSync(filePath)) {
      throw new Error(`FS operation failed: File '${filePath}' does not exist`);
    }

    await fsPromises.unlink(filePath);

    console.log('File deleted successfully!');
  } catch (error) {
    console.error(`FS operation failed: ${error.message}`);
    throw error;
  }
}

await remove();