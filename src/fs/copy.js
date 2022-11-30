import fs from 'fs';
import { readdir,copyFile,access,mkdir,stat } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const copy = async () => {
    const originPath = path.resolve(__dirname, 'files');
    const copyPath = path.resolve(__dirname, 'files_copy');
    if (await isFileExists(originPath) && ! await isFileExists(copyPath)) {
        await mkdir(copyPath);
        await copyDir(originPath, copyPath);
    } else {
        throw new Error('Fs operation failed')
    }

};

const copyDir = async (src,dest) => {
    const names = await readdir(src);
    names.forEach(async (fileName) => {
        const newSrc = path.join(src, fileName);
        const newDest = path.join(dest, fileName);
        const newStat = await stat(newSrc)
        if (newStat.isFile()) {
          await copyFile(newSrc, newDest);  
        } else {
            await mkdir(newDest);
            copyDir(newSrc, newDest);
        }
    })
}

const isFileExists = async (path) => {
    try {
        await access(path);
        return true
    } catch (e) {
        return false;
    }
}

copy();