import * as fs from 'fs';

export const list = async () => {
    const existsError = new TypeError('FS operation failed')

    if (!fs.existsSync("files")) {
        return console.log(existsError.message);
    }
    fs.readdir("files", (err, files) => {
        if (err) {
            return console.log(err.message)
        }
        console.log(files)
    })
};

list()