import {createReadStream} from "node:fs";
import {fileURLToPath} from "node:url"

const read = async () => {
    // Write your code here
    const pathToFile = fileURLToPath(new URL("./files/fileToRead.txt", import.meta.url))
    const readStream = createReadStream(pathToFile, {encoding: "utf8", highWaterMark: 1024})
    readStream.on("data", (chunk) => {
        process.stdout.write(chunk)
    })
};

await read();