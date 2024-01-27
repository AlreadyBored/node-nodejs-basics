import { readFile } from "fs/promises";
import errorHandler from "./errorHandler.js";

const readPath = './files/fileToRead.txt'

const read = async () => {
    try {
        const data = await readFile(readPath, {encoding: "utf-8"})
        console.log(data)
    } catch {
        errorHandler()
    }
};

await read();