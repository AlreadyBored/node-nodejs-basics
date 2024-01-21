import fs from "fs";
import path from "path";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";

const decompress = async () => {
    // Resolve the file paths
    const inputFilePath = path.resolve("./files/archive.gz");
    const outputFilePath = path.resolve("./files/fileToCompress.txt");

    // Create a readable stream for the compressed file
    const fileReadStream = fs.createReadStream(inputFilePath);

    // Create a writable stream for the output file
    const fileWriteStream = fs.createWriteStream(outputFilePath, { encoding: "utf8" });

    // Create a gunzip transform stream
    const gunzipStream = createGunzip();

    try {
        // Use pipeline to pipe the streams together
        await pipeline(fileReadStream, gunzipStream, fileWriteStream);
    } catch (e) {
        console.error("Something went wrong during the pipeline process", e);
    }
};

// Call the decompress function
await decompress();