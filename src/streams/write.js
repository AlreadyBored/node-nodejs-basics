import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(modulePath, "files", "fileToWrite.txt");

const write = async () => {
    const writable = fs.createWriteStream(filePath);

    process.stdin.pipe(writable);

    writable.on("finish", () => {
        console.log("Data has been written to the file.");
    });

    writable.on("error", (error) => {
        console.error("Error occurred while writing to the file:", error);
    });
};

await write();
