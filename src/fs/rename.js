import { readFile } from "fs";
import { rename as renameFunc} from "fs/promises";
import errorHandler from "./errorHandler.js";

const oldPath = new URL('./files/wrongFilename.txt', import.meta.url)
const newPath = new URL('./files/properFilename.md', import.meta.url)

const rename = async () => {
    const renameCallback = async () =>
        readFile(newPath, (err) => {
            err ? renameFunc(oldPath, newPath) : errorHandler()
        })

    readFile(oldPath, (err) => {
        err ? errorHandler() : renameCallback()
    })
};

await rename();