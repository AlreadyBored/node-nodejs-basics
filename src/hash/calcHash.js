import fs from "fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "url";
import path from "path";

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(modulePath, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error(err);
        }
        const hexHash = createHash("sha256").update(data).digest("hex");
        console.log(hexHash);
    });
};

await calculateHash();
