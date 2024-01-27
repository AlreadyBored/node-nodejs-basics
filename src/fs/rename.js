import { rename } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


const __dirname = dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, 'files')
const filesFolderCopy = path.join(__dirname, 'files-copy') 

const rename = async () => {
    // rename(path.join(filesFolder, 'wrongFilename.txt'),//fix rename
    // (path.join(filesFolder, 'properFilename.md')))
};

await rename();