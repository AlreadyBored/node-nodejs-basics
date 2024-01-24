import { cp } from 'fs/promises';
import path from 'path';
import { getDir } from './utils.js';

const src = path.join(getDir(), 'files');
const res = path.join(getDir(), 'files_copy');

const copy = async () => {
    try {
		await cp( src, res, {recursive: true ,force: false, errorOnExist: true});
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
