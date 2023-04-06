import fs from 'fs/promises';

const list = async () => {
  try {
    // get filenames from inside 'files' folder
    const fileNames = await fs.readdir('./files');

    //   print filenames
    fileNames.forEach((fileName) => {
      console.log(fileName);
    });
  } catch (err) {
    //  catch existence error
    if (err.code === 'ENOENT') {
      throw Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await list();
