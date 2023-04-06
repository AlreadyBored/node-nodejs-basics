import fs from 'fs/promises';

const read = async () => {
  try {
    // taking data from a file
    const data = await fs.readFile('./files/fileToRead.txt', {
      encoding: 'utf8',
    });
    console.log(data); // logging data to console
  } catch (err) {
    throw new Error('FS operation failed'); // throw an error if exists
  }
};

await read();
