import { mkdir,copyFile,readdir } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const copy = async () => {
    const source = __dirname+'/files';
    const destination = __dirname+'/files_copy';
    try {
        await mkdir(destination);
        console.log('Папка создана, копирование файлов...')
        const dirFiles = await readdir(source);
        await Promise.all(dirFiles.map(file=>copyFile(`${source}/${file}`,`${destination}/${file}`)))

    }catch (e){
        throw new Error('FS operation failed');
    }
};

copy();