import * as zlib from 'zlib';
import path from "path";
import * as fs from "fs";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
    const archive = path.resolve(__dirname, 'files', 'archive.gz');
    const buffer = await fs.promises.readFile(archive);

    zlib.unzip(buffer, async (err, buffer) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        await fs.promises.appendFile(filePath, buffer.toString());
    });
};

decompress();
