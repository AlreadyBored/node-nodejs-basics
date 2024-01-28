import { unlink,existsSync } from 'node:fs';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);


const remove = async () => {
    const targetFile = join(__dirname,'/files/fileToRemove.txt');

    if (!existsSync(targetFile)){
        throw new Error('FS operation failed!');
    }

    unlink(targetFile, err =>{
        if (err){
            console.error(err);
        }
    });
};

await remove();