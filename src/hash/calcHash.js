import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path = __dirname + "/files/fileToCalculateHashFor.txt";
const errorMessage = "FS operation failed";

const calculateHash = async () => {
    fs.readFile(path, (error, data) => {
        if (error) {
            throw new Error(errorMessage);
        } else {
            const hash = createHash("sha256");
            hash.update(data);
            const hex = hash.digest("hex");
            console.log(hex);
        }
    });
};

await calculateHash();
