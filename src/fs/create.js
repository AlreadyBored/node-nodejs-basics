import { readFile } from "fs";
import { writeFile } from "fs/promises";
import errorHandler from "./errorHandler.js";

const content = 'I am fresh and young'
const path = new URL('./files/fresh.txt', import.meta.url)

const create = async () => {
    readFile(path, (err) => {
        err ?  writeFile(path, content) : errorHandler()
    })
};

await create();