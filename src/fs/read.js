import * as fs from 'fs';

export const read = async () => {
    const existsError = new TypeError('FS operation failed')

    if (!fs.existsSync("files/fileToRead.txt")) {
        return console.log(existsError.message);
    }

    fs.readFile("files/fileToRead.txt", (err, data) => {
        if (err) {
            return console.log(existsError.message);
        }
        console.log(data.toString())
    })
};

read()