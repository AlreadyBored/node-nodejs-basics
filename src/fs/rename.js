import {access, rename as fsRename} from 'fs'
import {fileURLToPath} from "url";
import {createCorrectPath} from "../helper.js";

const rename = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const filePath = createCorrectPath(_filename, 'files', 'wrongFilename.txt');
    const propNameFile = createCorrectPath(_filename, 'files', 'properFilename.md');
    const errorMessage = 'FS operation failed'

    try {
        await access(filePath, (error) => {
            if (error) throw Error(errorMessage)
        })
        await access(propNameFile, (error) => {
            if (!error) throw Error(errorMessage)
        })
        await fsRename(filePath, propNameFile, (error) => {
            if (error) throw Error(errorMessage)
        })
    } catch (error) {}
};

await rename();