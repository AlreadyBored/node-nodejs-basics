import fs from 'fs/promises';

const read = async () => {
  try {
    // read './files/fileToRead.txt' file
    const content = await fs.readFile('./files/fileToRead.txt', {
      encoding: 'utf8',
    });

    // print the content
    console.log(content);
  } catch (err) {
    //  catch existence error
    if (err.code === 'ENOENT') {
      throw Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await read();
