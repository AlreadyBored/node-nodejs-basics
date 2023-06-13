import fs from 'fs/promises';
import path from 'path';
import url from 'url'

const list = async () => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dir = path.join(__dirname, 'files');
    const filesArr = []

    try {
        const files = await fs.readdir(dir, {withFileTypes: true});
        for(let file of files){
            if (file.isFile()) {
                filesArr.push(file.name)
            }
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
    console.log(filesArr);
};

await list();