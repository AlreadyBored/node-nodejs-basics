import zlib from "node:zlib";
import fs from "node:fs";
import { fileURLToPath } from "url";
import path from "path";

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const dataFilePath = path.join(modulePath, "files", "archive.gz");
const destinationFilePath = path.join(
    modulePath,
    "files",
    "fileToCompress.txt"
);

const decompress = async () => {
    const readStream = fs.createReadStream(dataFilePath);
    const writeStream = fs.createWriteStream(destinationFilePath);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on("finish", () => {
        console.log("File decompression completed.");
    });

    writeStream.on("error", (error) => {
        console.error("Error occurred while decompressing:", error);
    });
};

await decompress();
