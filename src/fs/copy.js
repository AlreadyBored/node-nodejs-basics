import { existsSync } from "node:fs";
import { copyFile, readdir,  mkdir} from 'node:fs/promises';

const copy = async () => {

    try {
        const path = './src/fs/files';
        const path2 = './src/fs/files_copy';
        if (existsSync(path2) || !existsSync(path)) {
            throw new Error('FS operation failed')
        } else {
            const projectFolder = new URL('./files_copy', import.meta.url);
            const createDir = await mkdir(projectFolder, { recursive: true });
            const readDir = await readdir(path);
            readDir.forEach(elem => {
                copyFile(`${path}/${elem}`, `${createDir}/${elem}`);
            });
        }
    } catch (e) {
        console.log(e)
    }
};

copy();