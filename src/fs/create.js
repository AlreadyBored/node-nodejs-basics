import * as fs from 'fs';

export const create = async () => {

    const existsError = new TypeError('FS operation failed')

    if (fs.existsSync("files/fresh.txt")) {
        console.log(existsError.message);
    } else {
        fs.writeFile("files/fresh.txt", "I am fresh and young", (err) => {
            if (err) {
                console.log(err.message)
            }
        })
    }
};

create()