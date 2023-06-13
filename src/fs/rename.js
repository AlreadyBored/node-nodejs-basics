import { existsSync } from "fs";
import * as fsPromises from "fs/promises";

const rename = async () => {
    if (existsSync("files/properFilename.md") || !existsSync("files/wrongFilename.txt")) {
        throw new Error("FS operation failed")
    }
    
    await fsPromises.rename("files/wrongFilename.txt", "files/properFilename.md")
};

await rename();