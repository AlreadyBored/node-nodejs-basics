import fs from 'fs/promises';

const copy = async () => {
  try {
    // create 'files_copy' folder
    await fs.mkdir('./files_copy');
    console.log("new './files_copy' folder created.");

    // get filenames from inside 'files' folder
    const fileNames = await fs.readdir('./files');
    fileNames.forEach(async (fileName) => {
      // copy files from 'files' folder to 'files_copy' folder
      await fs.copyFile(`./files/${fileName}`, `./files_copy/${fileName}`);
    });
    console.log("copied all files from './files' to './files_copy'");
  } catch (err) {
    // catch exist error
    if (err.code === 'EEXIST' || err.code === 'ENOENT') {
      throw Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await copy();
