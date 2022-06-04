import {rename as fsRename, open} from 'fs/promises';
import {fileURLToPath} from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
    let filehandle;
    try {
        filehandle = await open(path.join(__dirname, "/files/", "properFilename.md") ,"wx")
        await fsRename( path.join(__dirname, "/files/", "wrongFilename.txt"),  path.join(__dirname, "/files/", "properFilename.md"))
    } catch  {
        throw Error("FS operation failed")
    } finally {
        await filehandle?.close();
    }
};

//rename()