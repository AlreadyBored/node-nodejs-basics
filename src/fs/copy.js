import { mkdir, copyFile } from 'fs/promises'
import { join } from 'path'
import { getFileDirName, customExist } from '../utils/utils.js';

export const copy = async () => {
    try {
        const [__filename, __dirname] = await getFileDirName(import.meta.url)
        const filesDirPath = join(__dirname, 'files')
        const filesCopyDirPath = join (__dirname, 'files_copy')
        
        const isFilesDirExists = await customExist(filesDirPath)
        const isFilesCopyDirExists = await customExist(filesCopyDirPath)
    
        console.log('file copy', isFilesCopyDirExists)
        console.log('file', isFilesDirExists)
    }
    catch (error) {
        console.error(error)
    }
};

copy();