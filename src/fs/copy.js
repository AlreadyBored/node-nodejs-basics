import fs from 'fs/promises';

const copy = async () => {
  try {
    // create 'files_copy' folder
    await fs.mkdir('./files_copy');
    // get filenames from inside 'files' folder
    const fileNames = await fs.readdir('./files');
    fileNames.forEach(async (fileName) => {
      // copy files from 'files' folder to 'files_copy' folder
      await fs.copyFile(`./files/${fileName}`, `./files_copy/${fileName}`);
    });
  } catch (err) {
    // catch exist error
    if (err.code === 'EEXIST' || err.code === 'ENOENT') {
      throw Error('FS operation failed');
    } else {
      throw Error(err);
    }
  }
};

await copy();
