import {copyFile, mkdir, readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const copy = async () => {
    const _dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        const dirNameToCopy = _dirname + '/files/';
        const dirNameNew = _dirname + '/files_copy/';
        await mkdir(_dirname + '/files_copy');
        const files = await readdir(_dirname + '/files');
        for (const file of files) {
            await copyFile(dirNameToCopy + file, dirNameNew + file  )
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

copy();
