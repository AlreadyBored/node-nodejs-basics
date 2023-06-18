import fs from "fs";

const rename = async () => {
    const dir = 'src/fs/files/'
    const targetFile = 'wrongFilename.txt'
    const newFileName = 'properFilename.md'
    const errorText = 'FS operation failed'
    const ERR_CODE = 'ENOENT'

    const newFileExists = fs.existsSync(dir + newFileName)
    if (newFileExists) throw Error(errorText)
    try {
        await fs.promises.rename(dir + targetFile,dir + newFileName)
    } catch (error){
         if (error.code === ERR_CODE) throw Error(errorText)
    }
};

await rename();
