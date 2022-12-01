import {createWriteStream} from "node:fs"
import {pipeline} from "node:stream"
import {fileURLToPath} from "node:url"

const write = async () => {
    // Write your code here
    const pathToFile = fileURLToPath(new URL("./files/fileToWrite.txt", import.meta.url))
    const writeStream = createWriteStream(pathToFile)
    pipeline(process.stdin, writeStream, (err) => {
        if(err){
            throw new Error("FS operation failed")
        }
    })
};

await write();