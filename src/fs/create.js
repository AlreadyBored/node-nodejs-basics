import fs from 'fs/promises';

const create = async () => {
  try {
    // create new file for writing
    await fs.writeFile('./files/fresh.txt', 'I am freash and young', {
      flag: 'wx', // fails if the path ('./files/fresh.txt') exists
    });
    console.log(
      "new './files/fresh.txt' file created with the content 'I am freash and young'."
    );
  } catch (err) {
    // catch exist error
    if (err.code === 'EEXIST') {
      throw Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await create();
