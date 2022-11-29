import {readFile} from "node:fs";
import {fileURLToPath} from "node:url"

const read = async () => {
    // Write your code here
    const pathToFile = fileURLToPath(new URL("./files/fileToRead.txt", import.meta.url))
    await readFile(pathToFile, "utf-8", (err, data) => {
        if(err) throw new Error("FS operation failed")
        else console.log(data);
    })
};

await read();