import "fs"
import { readFileSync, readdirSync } from "fs";

const read = async () => {
    const path = "src/fs/files/"
    try {
        readdirSync(path).forEach(element => {
            console.log(readFileSync(`${path}${element}`,'utf-8'))
        });
        } catch (error) {
            throw Error(`FS operation failed: ${error}`)
            }};

await read();