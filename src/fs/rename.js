import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const initialFile = './files/wrongFilename.txt';
const finalFileName = './files/properFilename.md';
const messageOfError =  'FS operation failed';

const rename = async (file, ffn, errorMessage) => {

    const err = new Error(errorMessage);
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const absoluteInitialFilePath = path.join(__dirname, file);
    const absoluteFinalFilePath = path.join(__dirname, ffn);

    try {
        const exists  = !!(await fs.stat(absoluteFinalFilePath).catch(() => null));
        if (exists) {
            throw err;
        }
        await fs.rename(absoluteInitialFilePath, absoluteFinalFilePath);
    }   catch (error)  {
            if (error.code === 'ENOENT') {
                throw err;            
            } else {
                console.error(error.message);
            }
    }
};

await rename(initialFile, finalFileName, messageOfError);