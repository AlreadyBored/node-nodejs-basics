import { unlink } from "fs/promises";
import { readFile } from "fs";
import errorHandler from "./errorHandler.js";

const deletePath = './files/fileToRemove.txt'

const remove = async () => {
    readFile(deletePath, (err) => {
        err ? errorHandler() : unlink(deletePath)
    })
};

await remove();