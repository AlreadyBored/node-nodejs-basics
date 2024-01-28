import { mkdirSync,readdir,copyFile, existsSync } from 'node:fs';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const copy = async () => {
    const dirPath = join(__dirname, '/files');
    const destinationPath = join(__dirname, '/files_copy');

    if (!existsSync(destinationPath)){
        mkdirSync(destinationPath)
    } else if (!existsSync(dirPath) || existsSync(destinationPath)){
        throw new Error('FS operation failed!');
    }

    const files = readdir(dirPath);

    files.forEach( file =>{
        copyFile(join(dirPath,`/${file}`), join(destinationPath,`/${file}`), (err)=>{
            if (err){
                console.error(err);
            }
        });

    })
};

await copy();
