import * as fs from "fs";

const read = async () => {
    const pathToFile = './files/fileToRead.txt';
    const errorMessage = 'FS operation failed'

    const accessFile = fs.existsSync(pathToFile)

    if (!accessFile) {
        throw new Error(errorMessage);
    }

    await fs.readFile(pathToFile, 'utf8', (err, data) => {
        if (err) throw new Error(errorMessage)
        console.log(data)
    })
};


await read();