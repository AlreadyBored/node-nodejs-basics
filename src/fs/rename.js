import fs from 'fs/promises';
import path from 'path';
import { getDir } from '../utils.js';

const wrong = path.join(getDir(import.meta.url), 'files','wrongFilename.txt');
const proper = path.join(getDir(import.meta.url), 'files','properFilename.md');

const rename = async () => {
    try {
        await fs.rename( wrong, proper);
	} catch {
  	    throw new Error('FS operation failed');
	}
};

await rename();