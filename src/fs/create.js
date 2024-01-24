import { dirname } from 'path';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);
const fileContent = 'I am fresh and young';

const create = async () => {

    try {
        await writeFile((currentDir + '/files' + '/fresh.txt'), fileContent);
      } catch (err) {
        throw new Error(err)
      }
};

await create();