import fs from "fs";

const read = async () => {
    const dir = 'src/fs/files'
    const targetFileName = 'fileToRead.txt'
    const fileContentType = 'binary'
    const NO_EXISTS_CODE = 'ENOENT'
    const errorText = 'FS operation failed'

    try {
        const fileContent = await fs.promises.readFile(`${dir}/${targetFileName}`,fileContentType)
        console.log(fileContent)
    } catch (err){
        if (err.code === NO_EXISTS_CODE) throw Error(errorText)
    }
};

await read();
