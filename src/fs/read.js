import {readFile} from './functions/fsFunctions.js';
import {FILE_TO_READ_TXT} from '../constants/fileNames.js';

const read = async () => {
    return Promise.resolve(readFile(import.meta.url, '/files/', FILE_TO_READ_TXT));
};

await read();