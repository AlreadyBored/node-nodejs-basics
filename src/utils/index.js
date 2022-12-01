import { dirname } from 'path';
import { fileURLToPath } from 'url';

const getFilename = (url) => fileURLToPath(url);
const getDirname = (url) => dirname(getFilename(url));

export { getDirname, getFilename };