import path from 'path';
import { getDir } from './utils.js';
import { readdir } from 'fs/promises';

const list = async () => {
    try {
		const res = await readdir(path.join(getDir(), 'files'),  { recursive: true});
        console.log(res);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();