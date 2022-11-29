import {readdir} from "node:fs";
import {fileURLToPath} from "node:url"

const list = async () => {
    // Write your code here 
    const pathToDir = fileURLToPath(new URL("./files", import.meta.url))
    await readdir(pathToDir, (err, files)=>{
        if(err) throw new Error("FS operation failed")
        else console.log(files);
    })
};

await list();