import fs from 'fs/promises';

const create = async () => {
  const filePath = './files/fresh.txt';
  try {
    await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    // flag of wx can confirm if there is a such file or not before creating
  } catch (err) {
    if (err.code === 'EEXIST') {
      // check if file exists
      throw new Error('FS operation failed');
    } else {
      // throw error
      throw err;
    }
  }
};

await create();
