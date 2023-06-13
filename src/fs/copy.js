import fs from 'fs';
import path from 'path';

const copy = async () => {
  const currentFilePath = new URL(import.meta.url).pathname;
  const dirname = path.dirname(currentFilePath);
  const sourceFolderPath = path.join(dirname, 'files');
  const destinationFolderPath = path.join(dirname, 'files_copy');

  try {
    if (
      !fs.existsSync(sourceFolderPath) ||
      fs.existsSync(destinationFolderPath)
    ) {
      throw new Error('FS operation failed');
    }

    fs.mkdirSync(destinationFolderPath);

    const fileNames = fs.readdirSync(sourceFolderPath);
    for (const fileName of fileNames) {
      fs.copyFileSync(
        path.join(sourceFolderPath, fileName),
        path.join(destinationFolderPath, fileName),
        fs.constants.COPYFILE_EXCL
      );
    }

    console.log('Folder "files" has been copied successfully to "files_copy"');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
