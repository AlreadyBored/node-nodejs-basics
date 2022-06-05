import * as fs from "node:fs/promises";

export const create = async () => {
  
    let data = 'I am fresh and young';

    try {
        await fs.writeFile("./src/fs/files/fresh.txt", data, {
            encoding: "utf8",
            flag: "wx",
            mode: 0o666
        });
    } catch (error) {
        throw Error('FS operation failed');
    }


};

create();