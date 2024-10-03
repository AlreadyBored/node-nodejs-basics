import fs from "fs";
import path from "path";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";

const compress = async () => {
    // Resolve the file paths
    const inputFilePath = path.resolve("./files/fileToCompress.txt");
    const outputFilePath = path.resolve("./files/archive.gz");

    // Create a readable stream for the input file with UTF-8 encoding
    const fileReadStream = fs.createReadStream(inputFilePath, { encoding: "utf8" });

    // Create a writable stream for the output file with UTF-8 encoding
    const fileWriteStream = fs.createWriteStream(outputFilePath, { encoding: "utf8" });

    // Create a gzip transform stream
    const gzipStream = createGzip();

    try {
        // Use pipeline to pipe the streams together
        await pipeline(fileReadStream, gzipStream, fileWriteStream);
    } catch (e) {
        console.error("Something went wrong during the pipeline process", e);
    }
};

// Call the compress function
await compress();