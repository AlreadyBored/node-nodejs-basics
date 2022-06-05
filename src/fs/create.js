import {stat, writeFile} from "fs";
import {join, dirname} from "path";
import {fileURLToPath} from 'url';

export const create = async () => {
    const directory = dirname(fileURLToPath(import.meta.url));
    const filePath = join(directory, 'files', 'fresh.txt');
    const text = 'I am fresh and young';

    await stat(filePath, (err, stat) => {
        if (stat) {
            throw new Error("FS operation failed");
        } else {
            writeFile(filePath, text, (error) => {
                if (error) throw err;
            })
        }
    })
};

create();
