import * as fs from "fs";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const pathToFile = path.join(__dirname, './files/fileToRead.txt');

    const doesNotExistErr = 'FS operation failed: The file does not exist'

    const accessFile = fs.existsSync(pathToFile)

    if (!accessFile) {
        throw new Error(doesNotExistErr);
    }

    await fs.readFile(pathToFile, 'utf8', (err, data) => {
        if (err) throw err
        console.log(data)
    })
};

await read();