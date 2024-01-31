import fs from 'fs-extra';
import { join } from 'path';

const renameFiles = async () => {
  const oldFilename = 'wrongFilename.txt';
  const newFilename = 'properFilename.md';

  const currentDir = process.cwd();
  console.log('Current working directory:', currentDir);

  const oldFilePath = join(currentDir, oldFilename);
  const newFilePath = join(currentDir, newFilename);

  // Check if the source file exists (using fs-extra for case-insensitive check)
  try {
    await fs.access(oldFilePath, fs.constants.F_OK);
  } catch (sourceFileError) {
    console.error(`FS operation failed: Source file "${oldFilename}" does not exist`);
    return;
  }

  // Proceed with the renaming
  await fs.rename(oldFilePath, newFilePath);
  console.log(`File "${oldFilename}" renamed to "${newFilename}" successfully.`);
};

// Example usage
await renameFiles();
