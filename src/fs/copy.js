import fs from 'fs';
import path from 'path';

const copy = async () => {
    const sourceFolderPath = './files'
    const targetFolderPath = './files_copy'
    if (!fs.existsSync(sourceFolderPath)) {
        throw new Error('Files folder does not exists');
      }
      if (fs.existsSync(targetFolderPath)) {
        throw new Error('Target folder already exists.');
      }

      // Create the target folder
    fs.mkdirSync(targetFolderPath);

    // Get all files and directories in the source folder
    const files = fs.readdirSync(sourceFolderPath);

    // Copy each file/directory to the target folder
    for (const file of files) {
        const sourcePath = path.join(sourceFolderPath, file);
        const targetPath = path.join(targetFolderPath, file);
        const stats = fs.statSync(sourcePath);

    if (stats.isDirectory()) {
      // Recursively copy subdirectories
      copyFolderWithContents(sourcePath, targetPath);
    } else {
      // Copy individual files
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
};

await copy();
