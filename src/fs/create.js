import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const pathToDir = path.join(dirname, 'files');


const create = async () => {
  fs.writeFile(path.resolve(pathToDir,'fresh.txt'), 'I am fresh and young inside of the files folder', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}


await create();
