import { readdir, access, constants } from 'fs/promises';
import { join } from 'path';

const list = async () => {
  const folderName = 'files';

  const currentDir = process.cwd();
  const folderPath = join(currentDir, folderName);

  // Check if the folder exists
  try {
    await access(folderPath, constants.F_OK);
  } catch (folderError) {
    console.error(`FS operation failed: Folder "${folderName}" does not exist`);
    throw folderError;
  }

  // Read the filenames from the folder and print to console
  const filenames = await readdir(folderPath);
  console.log('List of filenames in "files" folder:', filenames);
};

// Example usage
await list();
