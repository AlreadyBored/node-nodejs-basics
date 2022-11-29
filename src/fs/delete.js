import {rm} from "node:fs";
import {fileURLToPath} from "node:url"

const remove = async () => {
    // Write your code here
    const pathToFile = fileURLToPath(new URL("./files/fileToRemove.txt", import.meta.url))
    await rm(pathToFile, (err)=>{
        if(err) throw new Error("FS operation failed")
        else console.log("Operation succesfull");
    })
};

await remove();