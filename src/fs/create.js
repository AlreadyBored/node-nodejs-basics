import { access, appendFile } from 'node:fs/promises';

const create = async () => {
  const path = './files/fresh.txt';

  try {
    const resp = await access(path);
    if (!resp) {
      return Promise.reject(new Error('FS operation failed'));
    }
  } catch {
    await appendFile(path, 'I am fresh and young');
  }
};

await create();
