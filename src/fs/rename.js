import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';


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