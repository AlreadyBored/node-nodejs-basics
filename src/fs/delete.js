import { unlinkSync, existsSync } from 'fs';
import { join } from 'path';

const remove = () => {
  const filenameToRemove = 'fileToRemove.txt';

  const currentDir = process.cwd();
  const filePathToRemove = join(currentDir, filenameToRemove);

  // Check if the file exists synchronously
  if (!existsSync(filePathToRemove)) {
    console.error(`FS operation failed: File "${filenameToRemove}" does not exist`);
    return;
  }

  // Proceed with file removal
  unlinkSync(filePathToRemove);
  console.log(`File "${filenameToRemove}" has been successfully removed.`);
};

// Example usage
remove();
