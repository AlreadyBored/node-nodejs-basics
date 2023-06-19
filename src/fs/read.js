import * as fs from "fs";

const read = async () => {
    const pathToFile = './files/fileToRead.txt';
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