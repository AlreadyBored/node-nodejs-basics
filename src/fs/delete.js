import fs from "fs";

const remove = async () => {
    const dir = 'src/fs/files/'
    const targetFile = 'fileToRemove.txt'
    const NO_EXISTS_CODE = 'ENOENT'
    const errorText = 'FS operation failed'

    try {
        await fs.promises.rm(dir + targetFile)
    } catch (err){
        if (err.code === NO_EXISTS_CODE) throw Error(errorText)
    }
};

await remove();
