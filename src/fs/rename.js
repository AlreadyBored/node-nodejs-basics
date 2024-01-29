import fs from "fs";
import path from 'node:path';
import { existsSync } from 'node:fs';

const rename = async () => {
    const oldName = path.resolve('src/fs/files/wrongFilename.txt')
    const newName = path.resolve('src/fs/files/properFilename.md')

    if (!existsSync(oldName)) {
        console.log('oldName not exists!\n')
        throw new Error('FS operation failed')
    }

    if (existsSync(newName)) {
        console.log('newName exists already!\n')
        throw new Error('FS operation failed')
    }

    await fs.promises.rename(oldName, newName);
};

await rename();