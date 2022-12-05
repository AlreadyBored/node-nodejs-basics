import * as url from 'url';
import path from "path";
import fsPromises from "fs/promises";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    let filesFolderPath = path.resolve(__dirname, "./files");

    try{
        let files = await fsPromises.readdir(filesFolderPath);
        files.forEach( file => console.log(file))
    }catch(err){
        throw new Error("FS operation failed");
    }
};

await list();