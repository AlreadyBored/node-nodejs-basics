import {access, appendFile} from 'node:fs/promises';

const create = async () => {
  const path = './files/fresh.txt';

  try {
    const response = await access(path);
    if(!response) {
      await Promise.reject(new Error('FS operation failed'));
    }
  } catch {
    await appendFile(path, 'I am fresh and young');
  }
};

await create();
