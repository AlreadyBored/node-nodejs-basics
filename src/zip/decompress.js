import path from "path";
import {createGzip, unzip} from "zlib";
import fs from "fs";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const fileReadPath = path.join(__dirname, 'files', 'archive.gz');
    const fileWritePath = path.join(__dirname, 'files', 'fileToCompress.txt');

    if (!fs.existsSync(fileReadPath)) {
        throw new Error('Operation failed');
    }

    const readStream = fs.createReadStream(fileReadPath);
    const writeStream = fs.createWriteStream(fileWritePath, {encoding: 'utf8'});

    readStream.on('data', (readBuffer) => {
        unzip(readBuffer, (err, unzipBuffer) => {
            if (err) {
                throw new Error('Operation failed');
            }
            writeStream.write(unzipBuffer);
            fs.unlink(fileReadPath, () => {})
        })
    });
};

await decompress();
