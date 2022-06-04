import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const list = async () => {
    // Write your code here 
    const __dirname = dirname(fileURLToPath(import.meta.url));
    let source = path.resolve(__dirname, 'files');
    try {
        let files = await fs.readdir(source);
        for (let file of files) {
            let filePath = path.resolve(source, file);
            const fileName = path.parse(filePath).name;
            console.log(fileName);

        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
}
list();
