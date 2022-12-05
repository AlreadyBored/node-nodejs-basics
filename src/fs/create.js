import * as url from 'url';
import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
    let filePath = path.resolve(__dirname, "./files", "fresh.txt");

    fs.access(filePath, async (err) => {
        if(!err) throw new Error("FS operation failed");

        await fsPromises.writeFile(filePath, "I am fresh and young", err => err && err)
    });
};

await create();