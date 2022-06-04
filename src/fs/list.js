import fs from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(process.argv[1]);

export const list = async () => {
    try {
        let files = await fs.readdir(path.join(__dirname, './files'));

        console.log(files)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

// list()