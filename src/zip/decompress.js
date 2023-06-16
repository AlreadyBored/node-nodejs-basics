import { createReadStream, createWriteStream, promises } from "fs";
import zlib from "node:zlib";
import path from "node:path";

const compressedFilePath = path.resolve("./src/zip/files/archive.gz");
const decompressedFilePath = path.resolve("./src/zip/files/fileToCompress.txt");

const decompress = async () => {
    try {
        await new Promise((resolve, reject) => {
            createReadStream(compressedFilePath)
                .pipe(zlib.createGunzip())
                .pipe(createWriteStream(decompressedFilePath))
                .on("finish", resolve)
                .on("error", reject);
        });

        await promises.unlink(compressedFilePath);
        console.log("File decompressed successfully.");
    } catch (error) {
        console.error("Error decompressing file:", error);
    }
};

await decompress();
