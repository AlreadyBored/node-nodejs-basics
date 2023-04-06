import fs from 'fs/promises';

const copy = async () => {
  try {
    await fs.mkdir('./files_copy'); // create a new folder for copying files
    const fileList = await fs.readdir('./files'); // make an array of files in the directory
    fileList.forEach(async (file) => {
      await fs.copyFile(`./files/${file}`, `./files_copy/${file}`); // copy files
    });
  } catch (err) {
    throw new Error('FS operation failed'); // if there is an error throw it
  }
};

await copy();
