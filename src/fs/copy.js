import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, 'files');
const copyFolderPath = path.join(__dirname, 'files_copy');

const copy = async () => {
    if (!fs.existsSync(folderPath)) {
        return console.error('FS operation failed');
    }
    
    fs.mkdir(copyFolderPath,
        (err) => {
            if (err) {
                console.error('FS operation failed');
            }
        }
    );

    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('FS operation failed');
        } else {
            files.forEach(file => {
                fs.copyFile(
                    path.join(folderPath, file),
                    path.join(copyFolderPath, file),
                    (err) => {
                        if (err) {
                            console.error('FS operation failed');
                        }
                    }
                )
            })
        }
    })
};

await copy();
