import { open, unlink } from 'node:fs/promises';

const remove = async () => {
  const filePath = 'src/fs/files/fileToRemove.txt';

  try {
    await open(filePath, 'r');
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.log(`Unexpected error when checking ${filePath}:`, error);
    }
  }

  try {
    await unlink(filePath);
    console.log(`${filePath} deleted successfully`);
  } catch (error) {
    console.log(`Error deleting ${filePath}:`, error);
  }
};

await remove();