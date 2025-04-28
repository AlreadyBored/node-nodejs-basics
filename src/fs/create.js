import { writeFile } from 'fs/promises';
import { join } from 'path';

import  { errorMessage, pathToFolder} from '../lib/fs/constants.js';

const content = 'I am fresh and young';
const fileName = 'fresh.txt';

const create = async () => {
  const fullPath = join(pathToFolder(),fileName);
    console.log(fullPath);
      
    try {
        await writeFile(fullPath, content, {flag: 'wx'});
    } catch (err) {        
        throw new Error(errorMessage);
    }
}

await create();