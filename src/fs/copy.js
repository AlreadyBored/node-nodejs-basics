import { constants, copyFile, mkdir, opendir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const copy = async () => {
  const sourceDir = 'src/fs/files';
  const destDir = 'src/fs/files_copy';

  try {
    await opendir(destDir);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    await mkdir(destDir);
    console.log(`${destDir} folder created successfully.`);
  }

  try {
    const files = await readdir(sourceDir);
    for (const file of files) {
      const srcFilePath = join(sourceDir, file);
      const destFilePath = join(destDir, file);


      await copyFile(srcFilePath, destFilePath, constants.COPYFILE_EXC);
      console.log(`${file} copied successfully.`);
    }

  } catch (error) {
    console.log('Error copying files:', error);

  }

};

await copy();
