import fs from "fs/promises";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils.js";


const __dirname = getDirnameFromUrl(import.meta.url);
const pathtoFile = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
    try{
        await fs.writeFile(pathtoFile, "I am fresh and young", {flag: "wx"});
    } catch{
        throw new Error ("FS operation failed");
    }
};

await create();
