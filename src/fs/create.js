import { dirname } from 'path';
import { existsSync } from 'fs';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);
const fileContent = 'I am fresh and young';

const create = async () => {

    if (existsSync((currentDir + '/files' + '/fresh.txt'))) {
      console.error('file already exist');
    }

    try {
        await writeFile((currentDir + '/files' + '/fresh.txt'), fileContent);
      } catch (err) {
        throw new Error(err)
      }
};

await create();