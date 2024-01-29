import fs, { existsSync } from 'fs';
import path from 'path';

const copy = async () => {
    try {
        if (!fs.existsSync('./files')) {
            throw new Error('FS operation failed');
        } else {
            const files = fs.readdirSync('./files');
            const filesWithExt = files.map((file) => {
                return path.join('./files', file);
            });
            if (fs.existsSync('./files_copy')) {
                throw new Error('FS operation failed');
            } else {
                fs.mkdirSync('./files_copy');
                for (let i = 0; i < filesWithExt.length; i++) {
                    const readStream = fs.createReadStream(filesWithExt[i]);
                    const name = path.basename(filesWithExt[i]);
                    const writeStream = fs.createWriteStream(`./files_copy/${name}.txt`);
                    readStream.pipe(writeStream);
                }
            }
        }
    } catch (err) {
        console.error('Something went wrong!');
    }
};

await copy();
