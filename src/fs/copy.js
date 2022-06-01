import { mkdir, copyFile, readdir, stat } from 'fs/promises'
import { join } from 'path'
import { getFileDirName, customExist } from '../utils/utils.js';

const copyDirectoryFromTo = async (sourceDirPath, toPath) => {
    try {
        await mkdir(toPath)
        const files = await readdir(sourceDirPath)
        
        await Promise.all(files.map(async (sourceFile) => {
            const sourceFilePath = join(sourceDirPath, sourceFile)
            const copyFilePath = join(toPath, sourceFile)

            const sourceFileStat = await stat(sourceFilePath)
            const isSourceFileDirectory = sourceFileStat.isDirectory()

            if (isSourceFileDirectory) copyDirectoryFromTo(sourceFilePath, copyFilePath)
            else await copyFile(sourceFilePath, copyFilePath)
        }))
    }
    catch (err) {
        return err
    }
} 

export const copy = async () => {
    try {
        const [__filename, __dirname] = await getFileDirName(import.meta.url)
        const sourceDirPath = join(__dirname, 'files')
        const copyDirPath = join (__dirname, 'files_copy')

        const isSourceDirExists = await customExist(sourceDirPath)
        const isCopyDirExists = await customExist(copyDirPath)

        const errorMsg = 'FS operation failed'
        if (!isSourceDirExists) throw new Error(errorMsg)
        if (isCopyDirExists) throw new Error(errorMsg)

        await copyDirectoryFromTo(sourceDirPath, copyDirPath)
    }
    catch (err) {
        console.error(err)
    }
}

copy()
