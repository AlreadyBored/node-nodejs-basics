import fs from 'fs/promises';
import path from 'path';
import url from 'url';



const copy = async () => {
    // Write your code here 
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const srcPath = path.join(__dirname, 'files');
    const destPath = path.join(__dirname, 'files_copy');

};

await copy();
