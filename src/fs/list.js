import fs from "fs";
import path from "path";

const list = async () => {
    // Write your code here
    // list.js - implement function that prints all array of filenames from files folder into console
    // (if files folder doesn't exists Error with message FS operation failed must be thrown)

    const filesPath = path.resolve('src', 'fs', 'files')
    const files = []

    try {
        if(!fs.existsSync(filesPath)) throw new Error('FS operation failed')

        const dir = await fs.promises.opendir(filesPath)
        for await (const file of dir) {
            files.push(file.name)
        }
        console.log(files)
    } catch (e) {
        console.log(e)
        throw e
    }
};

await list();