import {removeFile} from './functions/fsFunctions.js';
import {FILE_TO_REMOVE_TXT} from '../constants/fileNames.js';

const remove = async () => {
    return Promise.resolve(removeFile(import.meta.url, '/files/', FILE_TO_REMOVE_TXT));
};

await remove();