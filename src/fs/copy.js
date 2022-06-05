import * as fs from 'fs';

export const copy = async () => {
    const existsError = new TypeError('FS operation failed')

    if (!fs.existsSync("files")) {
        return console.log(existsError.message);
    }
    if (fs.existsSync("files_copy")) {
        return console.log(existsError.message);
    }
    fs.mkdir("files_copy", (err) => {
        if (err) {
            return console.log(existsError.message)
        }
    })
    fs.readdir("files", (err, files) => {
        if (err) {
            return console.log(err.message)
        }
        for (let item in files) {
            let file = "files/" + files[item]
            let path = "files_copy/" + files[item]
            fs.copyFile(file, path, (err) => {
                if (err) {
                    return console.log(existsError.message)
                }
            })
        }
    })

 
};

copy()