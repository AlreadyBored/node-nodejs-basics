import fs from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(process.argv[1]);

export const read = async () => {
    try {
        let files = await fs.readFile(path.join(__dirname, '/files/fileToRad.txt'));

        console.log(files.toLocaleString())
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

// read();