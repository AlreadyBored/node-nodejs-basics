import fs from "fs";

const list = async () => {
    const dir = 'src/fs/files'
    const NO_EXISTS_CODE = 'ENOENT'
    const errorText = 'FS operation failed'
    try {
        const files= await fs.promises.readdir(dir)
        files.forEach(fileName =>  console.log(`${dir}/${fileName}`))
    } catch (err){
        if (err.code === NO_EXISTS_CODE) throw Error(errorText)
    }
};

await list();
