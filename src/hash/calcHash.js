import {createHash} from "crypto";
import fs from "fs/promises";

export const calculateHash = async () => {
    try {
        const fileContent = await fs.readFile('./files/fileToCalculateHashFor.txt','utf8');
        const result = createHash("sha256").update(fileContent).digest("hex");
        return result
    } catch (e) {
        throw new Error("Operation failed")
    }
};