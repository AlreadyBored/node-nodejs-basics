import fs from "fs/promises";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);


const rename = async () => {
    try{
        await fs.rename(path.join(__dirname, "files", "wrongFilename.txt"), path.join(__dirname, "files", "properFilename.md"));
    } catch{
        throw new Error ("FS operation failed");
    }
};

await rename();