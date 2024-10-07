import path from 'node:path';
import { writeFile } from 'fs/promises';
import {ERROR_MSG, FILES_PATH} from '../constants.js'

const FILE_NAME = 'fresh.txt';
const CONTENT ='Im fresh young';
const url = path.join(import.meta.dirname, FILES_PATH , FILE_NAME);

const create = async () => {
   try {
        await writeFile(url, CONTENT, { flag: 'wx' });
   } catch(err) {
        throw new Error(ERROR_MSG);
   }
}; 

await create();