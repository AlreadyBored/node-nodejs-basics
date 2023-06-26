import fs, { open } from 'fs/promises';
import {getFullPath} from './utils.js';

const printFileContent = async (fileName) => {
    const fullPath = getFullPath(fileName);
    try {
        const fd = await open(fullPath);
        const readableStream = fd.createReadStream({ encoding: 'utf8' });
        readableStream.on('data', (data) => {
            process.stdout.write(`${data}\n`);
        });
    } catch (e) {
        console.log('Operation failed', e)
    }

}


const createFile = async (fileName) => {
    try {
        const fullPath = getFullPath(fileName)
        await fs.writeFile(fullPath, '', { flag: 'wx' });
    } catch (e) {
        console.log('Operation failed', e);
    }
}

const removeFile = async (fileName) => {
    try {
        const fullPath = getFullPath(fileName);
        await fs.unlink(fullPath);
    } catch (e) {
        console.log('Operation failed', e);
    }
}

const renameFile = () => {

}

const copyFile = () => {

}

const moveFile = () => {

}
export { createFile, printFileContent, removeFile, renameFile, moveFile, copyFile }
