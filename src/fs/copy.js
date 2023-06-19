import {copyDir} from './functions/fsFunctions.js';

const copy = async () => {
  return Promise.resolve(copyDir(import.meta.url, '/files', '/files_copy'))
};

await copy();
