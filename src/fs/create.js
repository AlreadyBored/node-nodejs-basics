import {appendFile, existsSync} from 'fs';
import {fileURLToPath} from 'url';
import {join} from 'path';

const text = 'I am fresh and young';
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const path = join(__dirname, 'files', 'fresh.txt');

export const create = async () => {
    if (existsSync(path)) {
        throw new Error('FS operation failed');
    }

    await appendFile(path, text, 'utf-8', (err) => {
        if (err) {
            throw err;
        }
    });
};