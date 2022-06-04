import  {open, writeFile} from "fs/promises";
import path from "path";
import {fileURLToPath} from 'url';

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filesFolderPath = path.join(__dirname + "/files/")

    let filehandle;
    try {
        filehandle = await open(path.join(filesFolderPath + "fresh.txt") ,"wx")
        await writeFile(path.join(filesFolderPath + "fresh.txt"), "I am fresh and young", )
    } catch (e) {
        if (e && e.code === "EEXIST") {
            throw Error("FS operation failed");
       }
    } finally {
        await filehandle?.close();
    }
}

//create()