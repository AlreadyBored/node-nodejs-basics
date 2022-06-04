import {dirname} from "node:path";
import { fileURLToPath } from "node:url";
import { readdir } from "node:fs/promises";

const folderPath = dirname(fileURLToPath(import.meta.url)) + "/files/";

export const list = async () => {
    try {
        let filesArray = await readdir(folderPath, {withFileTypes: false});
        console.log(filesArray);
    } catch (err) {
        console.log ("Some error occured: " + err);
        throw new Error("FS operation failed");
    }
};
