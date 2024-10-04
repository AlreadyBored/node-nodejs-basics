import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    if (fs.existsSync(path.join(__dirname, 'files'))) {
        await copyDir();
    } else {
        throw new Error('FS operation failed');
    }
};

await copy();

async function copyDir() {
    try {
        fs.access(path.join(__dirname, 'files-copy'), (error) => {
            if (error && error.code !== 'ENOENT') {
                console.log(error);
            } else if (error && error.code === 'ENOENT') {
                makeDir().then(() => {
                    fs.readdir(path.join(__dirname, 'files'), (error, files) => {
                        if (error) 
                            console.log(error); 
                        else {
                            for (let file of files) {
                                fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), (error) => {
                                    if (error) {
                                        console.log(error);
                                    }
                                });
                            }
                        }
                    });
                });
            } else {
                throw new Error('FS operation failed');
            }
        });
    } catch (error) {
        console.log(error);
    }
}

async function makeDir() {
    return new Promise((resolve, reject) => {
        fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (error) => {
            if (error) {
                console.log(error);
                return reject(error);
            }
            resolve();
        });
    });
}
