import asyncFs from "fs/promises";
import path from "path";

const filesDirPath = path.join(process.cwd(), "src/fs/files");
const list = async () => {
    // Write your code here
    try {
        const dir = await asyncFs.opendir(filesDirPath);

        for await (const dirent of dir) {
            console.log(dirent.name);  // Log the name of the file/directory
        }
    }catch (e){
        if(e.code ==='ENOENT'){
            throw new Error('FS operation failed')
        }
        else{
            throw e
        }
    }

};

await list();