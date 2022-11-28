import {fileURLToPath} from "node:url";
import path from "node:path";
import {createGunzip} from "node:zlib";
import {createReadStream, createWriteStream} from "node:fs";
import {pipeline} from "node:stream";

const decompress = async () => {
    // Write your code here
    const fileName = 'fileToCompress.txt'
    const zipName = 'archive.gz'
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const fullPath = path.join(__dirname, 'files', fileName)
    const fullPathZip = path.join(__dirname, 'files', zipName)


    const gUnzip = createGunzip();
    const source = createReadStream(fullPathZip);
    const destination = createWriteStream(fullPath);

    pipeline(source, gUnzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();