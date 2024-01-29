import { existsSync } from 'node:fs';
import { cp } from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
    const src = path.resolve('src/fs/files/')
    const dest = path.resolve('src/fs/files_copy/')

    if (!existsSync(src)) {
        console.log('src folder not exists!\n')
        throw new Error('FS operation failed')
    }

    if (existsSync(dest)) {
        console.log('dest folder exists already!\n')
        throw new Error('FS operation failed')
    }

    await cp(src, dest, {
        recursive: true,
        force: false,
        errorOnExist: true,
    });
    console.log('copy done!')
}
await copy();
