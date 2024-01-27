import { readFile } from "fs";
import { rename as renameFunc} from "fs/promises";
import errorHandler from "./errorHandler.js";

const oldPath = './files/wrongFilename.txt'
const newPath = './files/properFilename.md'

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