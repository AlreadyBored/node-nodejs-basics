import fs from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
  const errorMessage = 'FS operation failed';
  const file = path.join(path.resolve(''), 'fs', 'files', 'fresh.txt');
  fs.access(file)
    .then(() => {
      throw new Error(errorMessage);
    })
    .catch((error) => { 
      if (`${error}` !== `Error: ${errorMessage}`) {
        fs.writeFile(
          file,
          'I am fresh and young',
          'utf8',
          () => {}
        ); 
      } else throw new Error(error);
  });
};

await create();