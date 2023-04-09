import { access, readdir } from 'node:fs/promises';
import {dirname, join} from 'path'
import { fileURLToPath } from 'url';

const sourceFolder = 'files';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceFolderPath = join(__dirname, sourceFolder);

const list = async () => {
    try {
        const isSourceFolderExists = await access(sourceFolderPath)
                                            .then(() => true)
                                            .catch(() => false);
        if (!isSourceFolderExists) {
          throw new Error('FS operation failed');
        }
        const files = await readdir(sourceFolderPath);
        for (let i=0; i<files.length; i++) {
          console.log(files[i]);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();