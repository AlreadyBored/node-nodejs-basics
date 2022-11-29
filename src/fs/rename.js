import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    // Write your code here 
    const pathToWrongFileName = `${__dirname}/files/wrongFilename.txt`;
    const newPath = `${__dirname}/files/properFilename.md`;
    const prRename = promisify(fs.rename);

    try {
        await prRename(pathToWrongFileName, newPath)
    }
    catch (err) {
        throw new Error('FS operation failed')
    }
};

await rename();