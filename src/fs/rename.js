import fsProm from 'fs/promises';
import {existsSync} from 'fs';
import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt' );
    const newPath = path.join(__dirname, 'files', 'properFilename.md');

    if (existsSync(newPath) || !existsSync(oldPath)) {
      throw new Error('FS operation failed');
    }
    await fsProm.rename(oldPath, newPath)
    .catch( (error) => {
        throw new Error('FS operation failed');
    })

};

await rename();
