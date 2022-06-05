import fs from "fs";

export const create = async () => {
    fs.stat('./files/fresh.txt', (err) => {
        if(err === null) {
            throw "FS Operation Failed";
        }
    });
    fs.writeFile(
        './files/fresh.txt',
        'I am fresh and young',
        (err) => {
            if(err) {
                throw "FS Operation Failed";
            }
        }
    )
};