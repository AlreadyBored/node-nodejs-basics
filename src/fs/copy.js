import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const isDirectoryAndExist = (name) => {
    const exists = existsSync(name);
    const stats = exists && statSync(name);

    return  exists && stats.isDirectory();
}

const copyRecursive = (src, dest) => {
    const isDirectory = isDirectoryAndExist(src);

    if (isDirectory) {
        mkdirSync(dest);
        readdirSync(src).forEach(function(childItemName) {
            copyRecursive(join(src, childItemName),
                join(dest, childItemName));
        });
    } else {
        copyFileSync(src, dest);
    }
}

const copy = async (src, dest) => {
    const isSrcDirectoryAndExist = isDirectoryAndExist(src);
    const isDestDirectoryAndExist = isDirectoryAndExist(dest);

    if(!isSrcDirectoryAndExist || isDestDirectoryAndExist){
        throw new Error('FS operation failed')
    } else {
        copyRecursive(src, dest)
    }


};

await copy('files', 'files_copy');
