import { access, mkdir, readdir, copyFile } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorText = 'FS operation failed';

const copy = async () => {
  const folderForCopyPath = path.join(__dirname, 'files');
  const resultFolderPath = path.join(__dirname, 'files_copy');

  try {
    await access(folderForCopyPath, constants.F_OK);
    try {
      await access(resultFolderPath, constants.F_OK);
      throw new Error(errorText);
    } catch (error) {
      await mkdir(resultFolderPath);
      const filesInFolder = await readdir(folderForCopyPath, {
        withFileTypes: true,
      });
      filesInFolder.forEach((file) => {
        const sourceFile = path.join(file.parentPath, file.name);
        const resultFile = path.join(resultFolderPath, file.name);

        copyFile(sourceFile, resultFile);
      });
    }
  } catch (error) {
    throw new Error(errorText);
  }
};

await copy();
