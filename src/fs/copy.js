import * as fs from 'fs'
import path from 'path';

const __dirname = import.meta.dirname;

const folderName = 'files';
const folderCopyName = 'files_copy';

const getFolderPath = (folderName) => path.join(__dirname, folderName)
const getFilePath = (folderName, fileName) => path.join(getFolderPath(folderName), fileName)

const folderNamePath = getFolderPath(folderName)
const folderCopyNamePath = getFolderPath(folderCopyName)

const copy = async () => {
    try {
        if (!fs.existsSync(folderNamePath) || fs.existsSync(folderCopyNamePath)) {
            throw new Error('FS operation failed')
        }
    
        fs.mkdirSync(folderCopyNamePath)

        const files = fs.readdirSync(folderNamePath)

        files.forEach(file => {
            const sourcePath = getFilePath(folderName, file);
            const copyPath = getFilePath(folderCopyName, file);

            fs.copyFileSync(sourcePath, copyPath);
        })
    } catch (error) {
        throw new Error(error.message)
    }
};

await copy();
