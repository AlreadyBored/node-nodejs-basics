import { cp } from 'fs/promises';
import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const src = path.join(__dirname, 'files');
    const dest = path.join(__dirname, 'files_copy');

    await cp( src, dest, {
        recursive: true,
        force: false,
        errorOnExist: true,
    }).catch((error) => { if(error) {throw new Error('FS operation failed');}})
  // Write your code here
};

await copy();
