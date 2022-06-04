import * as fs from 'fs/promises';

export const create = async () => {
    fs.access("fs/files/fresh.txt")
        .then(() =>  console.log(new Error("\x1b[31m FS operation failed")))
        .catch(() =>  fs.writeFile("fs/files/fresh.txt", "I am fresh and young"));
};

create()