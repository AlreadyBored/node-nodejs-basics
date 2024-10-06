import { stat, access, constants, readdir, copyFile, mkdir} from 'fs/promises';
import { errorMessage, pathToFolder } from '../lib/fs/constants.js';
import { join } from 'path';

const filesCopyFolderName = 'files_copy';
const pathToFilesFolder = pathToFolder();
const pathToFilesCopyFolder = pathToFolder(filesCopyFolderName);

const copy = async () => {

    const filesFolderStat = await stat(pathToFilesFolder);
    if (!filesFolderStat.isDirectory) {
        throw new Error(errorMessage);
    } 
   
   try {
    await access(pathToFilesCopyFolder)
    throw new Error(errorMessage);
   } catch (err) {        
        if (err.code === 'ENOENT') {
            const [filesIntoFilesFolder] = await Promise.all([readdir(pathToFilesFolder), mkdir(pathToFilesCopyFolder)]);
            const promises = filesIntoFilesFolder.map((fileName) => 
            copyFile(join(pathToFilesFolder,fileName), join(pathToFilesCopyFolder,fileName), constants.COPYFILE_EXCL));
            await Promise.all(promises);
        } else {
            throw new Error(errorMessage); 
        }
   }
};

await copy();
