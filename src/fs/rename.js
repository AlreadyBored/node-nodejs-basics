import {renameFile} from './functions/fsFunctions.js';
import {
    PROPER_FILE_NAME_TXT,
    WRONG_FILE_NAME_TXT
} from '../constants/fileNames.js';

const rename = async () => {
    const fileToRename = {
        fileName: WRONG_FILE_NAME_TXT,
        fileDir: '/files/'
    };

    const fileRenamed = {
        fileName: PROPER_FILE_NAME_TXT,
        fileDir: '/files/'
    };

    return Promise.resolve(renameFile(import.meta.url, fileToRename, fileRenamed));
};

await rename();