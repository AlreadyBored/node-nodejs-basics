import fs from "fs/promises";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";

const __dirname = getDirnameFromUrl(import.meta.url);


const list = async () => {
    try{
       const fileList = await fs.readdir(path.join(__dirname, "files"));
         console.log(fileList);
    } catch{
        throw new Error ("FS operation failed");
    }
};
 
await list();