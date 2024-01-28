import { readdirSync, existsSync } from 'node:fs';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const list = async () => {
    const dirPath = join(__dirname, '/files');

    if (!existsSync(dirPath)){
        throw new Error('FS operation failed!');
    }

    const files = readdirSync(dirPath);

    files.forEach(files =>{
        console.log(files);
    })

};

await list();