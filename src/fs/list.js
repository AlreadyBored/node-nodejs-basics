import {listFiles} from './functions/fsFunctions.js';

const list = async () => {
    return Promise.resolve(listFiles(import.meta.url, '/files'));
};

await list();