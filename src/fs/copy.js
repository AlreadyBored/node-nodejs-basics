import fs from "fs/promises";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);
const sourceDir = path.join(__dirname, "files");
const targetDir = path.join(__dirname, "files_copy");


const copy = async () => {
    try{
        await fs.cp( sourceDir, targetDir, {recursive: true, force: false, errorOnExist: true});
    } catch{
        throw new Error ("FS operation failed");
    }
};

await copy();
