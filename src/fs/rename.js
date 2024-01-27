import * as fs from 'fs'
import path from 'path';

const __dirname = import.meta.dirname;

const folderName = 'files';
const oldFilePath = path.join(__dirname, folderName, 'wrongFilename.txt')
const newFilePath = path.join(__dirname, folderName, 'properFilename.md')

const rename = async () => {
    try {
        if (!fs.existsSync(oldFilePath) || fs.existsSync(newFilePath)) {
            throw new Error('FS operation failed')
        }

        fs.renameSync(oldFilePath, newFilePath)
    } catch (error) {
        throw new Error(error.message)
    }
};

await rename();