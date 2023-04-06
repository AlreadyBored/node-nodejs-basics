import fs from 'fs/promises';

const copy = async () => {
  try {
    // create 'files_copy' folder
    await fs.mkdir('./files_copy');
    console.log("new './files_copy' folder created.");

    // get filenames from inside 'files' folder
    const fileNames = await fs.readdir('./files');

    // copy files from 'files' folder to 'files_copy' folder
    fileNames.forEach(async (fileName) => {
      await fs.copyFile(`./files/${fileName}`, `./files_copy/${fileName}`);
    });

    console.log("copied all files from './files' to './files_copy'");
  } catch (err) {
    //  catch existence error
    if (err.code === 'EEXIST' || err.code === 'ENOENT') {
      throw Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await copy();
