import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const inputFilePath = path.join(__dirname, "files", "archive.gz");
    const outputFilePath = path.join(__dirname, "files", "fileToCompress.txt");

    await pipeline(
        createReadStream(inputFilePath),
        createUnzip(),
        createWriteStream(outputFilePath)
    )
};

await decompress();
