import * as url from 'url';
import path from "path";
import fsPromises from "fs/promises";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    let filePath = path.resolve(__dirname, "./files", "fileToRead.txt");

    try{
        let data = await fsPromises.readFile(filePath, "utf-8");
        console.log(data)
    }catch(err){
        throw new Error("FS operation failed");
    }
};

await read();