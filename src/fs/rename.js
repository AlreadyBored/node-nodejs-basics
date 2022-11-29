import fs from 'node:fs';
import {fileURLToPath} from "node:url"

const rename = async () => {
    // Write your code here
    const pathToFile = fileURLToPath(new URL("./files/wrongFilename.txt", import.meta.url))
    const pathToNewFile = fileURLToPath(new URL("./files/properFilename.md", import.meta.url))

    await fs.rename(pathToFile, pathToNewFile, (err) => {
        if (err) throw new Error("FS operation failed");
        else console.log('Rename complete!');
    });
};

await rename();