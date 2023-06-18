import { promises as fs } from 'fs';

const initialFile = './src/fs/files/wrongFilename.txt';
const finalFileName = './src/fs/files/properFilename.md';
const messageOfError =  'FS operation failed';

const rename = async (file, ffn, errorMessage) => {

    const err = new Error(errorMessage);

    try {
        const exists  = !!(await fs.stat(ffn).catch(() => null));
        if (exists) {
            throw err;
        }
        await fs.rename(file, ffn);
    }   catch (error)  {
            if (error.code === 'ENOENT') {
                throw err;            
            } else {
                console.error(error.message);
            }
    }
};

await rename(initialFile, finalFileName, messageOfError);