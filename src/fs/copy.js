import fs, { constants } from 'fs';
import { promisify } from 'util';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const stat = promisify(fs.stat);
const readDir = promisify(fs.readdir);
const makeDir = promisify(fs.mkdir);
const copyFile = promisify(fs.copyFile);
const copyFolder = 'files_copy';
const oldFolder = 'files';


export const copy = async () => {
 try{
    const result = await stat(path.join(__dirname, 'files'));
    const folderInfo = await readDir(path.join(__dirname, oldFolder),'utf-8');
    if(result.isDirectory() && !fs.existsSync(path.join(__dirname, 'files_copy'))){
         await makeDir(path.join(__dirname,'files_copy'))
         await Promise.all(
            folderInfo.map(async(fileName)=> copyFile(path.join(__dirname, oldFolder,fileName),path.join(__dirname, copyFolder, fileName), constants.COPYFILE_EXCL))
        )
    }
    else{
        throw new Error('FS operation failed: files should be folder or you have already files_copy')
    }
}
 catch(err){
     console.error('FS operation failed: ', err.message);
 }

};

copy()