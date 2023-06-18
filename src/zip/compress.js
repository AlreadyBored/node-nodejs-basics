import zlib from "node:zlib";
import fs from "node:fs";
import { fileURLToPath } from "url";
import path from "path";

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const dataFilePath = path.join(modulePath, "files", "fileToCompress.txt");
const destinationFilePath = path.join(modulePath, "files", "archive.gz");

const compress = async () => {
    const readStream = fs.createReadStream(dataFilePath);
    const writeStream = fs.createWriteStream(destinationFilePath);
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on("finish", () => {
        console.log("File compression completed.");
    });

    writeStream.on("error", (error) => {
        console.error("Error occurred while compressing:", error);
    });
};

await compress();
