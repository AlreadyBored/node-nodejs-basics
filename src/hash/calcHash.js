import {createHash} from "node:crypto"
import {readFile} from "node:fs";
import {fileURLToPath} from "node:url"

const calculateHash = async () => {
    // Write your code here 
    const pathToFile = fileURLToPath(new URL("./files/fileToCalculateHashFor.txt", import.meta.url))
    await readFile(pathToFile, "utf-8", (err, data) => {
        if(err) throw new Error("FS operation failed")
        else console.log(createHash('sha256').update(data).digest('hex'));
    })
};

await calculateHash();