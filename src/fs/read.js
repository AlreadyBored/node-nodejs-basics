import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const filePath = 'files/fileToRead.txt';
const messageOfError =  'FS operation failed';

const read = async (fl, errorMessage) => {
    
    const errMessage = new Error(errorMessage);
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const absoluteFolderPath = path.join(__dirname, fl);

    try {
        const file = await fs.open(absoluteFolderPath);
        for await (const line of file.readLines()) {
            console.log(line);
        }
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            throw errMessage;    
        } else {
            console.error(err.message);
        }
    }
};

await read(filePath, messageOfError);