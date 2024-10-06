import asyncFs from "fs/promises";
import path from "path";

const fileToRenamePath = path.join(process.cwd(), 'src/fs/files/wrongFilename.txt')
const renamedFilePath = path.join(process.cwd(), 'src/fs/files/properFilename.md')

const rename = async () => {
    try{
        try{
            await asyncFs.access(fileToRenamePath)
        }catch (e){
            throw new Error('FS operation failed: wrongFilename.txt does not exist');
        }

        try {
            await asyncFs.access(renamedFilePath)
            throw new Error('FS operation failed: properFilename.md already exists');
        }catch (e){
            //если его не существует то ошибка не прокидывается
            if(e.code !== 'ENOENT'){
                throw e
            }
        }
        await asyncFs.rename(fileToRenamePath,renamedFilePath)
    }catch (e){
        console.error(e)
    }

};

await rename();