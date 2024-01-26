import { copyFile, mkdir, readdir } from 'fs/promises';
import path from 'path';
import { getDir } from './utils.js';

const dir = getDir();
const src = path.join(dir, 'files');
const target = path.join(dir, 'files_copy');

async function copyDir(src, dest) {
    let items = await readdir(src, { recursive: true, withFileTypes: true });

    for (let item of items) {
        let srcPath = path.join(item.path, item.name);
        let destPath = srcPath.replace(src, dest);
        let destDir = path.dirname(destPath);
        
        if (item.isFile()) {
            await mkdir(destDir, { recursive: true })
            await copyFile(srcPath, destPath);
        }
    }
}

const copy = async () => {
    try {
        copyDir(src, target);
    } catch {
        throw new Error('FS operation failed');
    }    
}

await copy();
