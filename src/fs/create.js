import fs from 'fs/promises';

const create = async () => {
  try {
    // create new file for writing
    await fs.writeFile('./files/fresh.txt', 'I am freash and young', {
      flag: 'wx', // fails if the path ('./files/fresh.txt') exists
    });
  } catch (err) {
    // catch exist error
    if (err.code === 'EEXIST') {
      throw Error('FS operation failed');
    } else {
      throw Error(err);
    }
  }
};

await create();
