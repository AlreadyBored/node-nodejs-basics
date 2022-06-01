import {existsSync} from 'fs';
import {appendFile} from 'fs/promises';
import {fileURLToPath} from 'url';
import {join} from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const create = async () => {
    const text = 'I am fresh and young';
    const filePath = join(__dirname, 'files', 'fresh.txt');
    
    if (existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    try {
        await appendFile(filePath, text);
    } catch(err) {
        throw err;
    }
};