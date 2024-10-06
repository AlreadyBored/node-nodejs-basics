import fs from 'fs/promises';
import path from "path";


const filesPath = path.join(process.cwd(),'src/fs/files')
const copyFilesPath = path.join(process.cwd(),'src/fs/files_copy')


const copy = async () => {
    try{
        try{
            await fs.access(filesPath)
        }catch (e) {
            throw new Error('FS operation failed: no files');
        }

        try{
            await fs.access(copyFilesPath); // This will throw if the folder doesn't exist
            throw new Error('FS operation failed: destination folder already exists.');
        }catch (e){
            if(e.code !== 'ENOENT'){
                throw e //перекидываем на уровень выше
            }
        }
        await fs.cp(filesPath,copyFilesPath,{recursive:true} )
        console.log('Files copied successfully.');
    }catch (e){
        console.error(e)
    }
};

await copy();
