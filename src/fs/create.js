import { readFile } from "fs";
import { writeFile } from "fs/promises";
import errorHandler from "./errorHandler.js";

const content = 'I am fresh and young'
const path = './files/fresh.txt'

const create = async () => {
    readFile(path, (err) => {
        err ?  writeFile(path, content) : errorHandler()
    })
};

await create();