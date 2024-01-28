import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util"
import { createGunzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";

const pipe = promisify(pipeline);

const decompress = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const sourse = createReadStream(__dirname + "/files/archive.gz");
    const destination = createWriteStream(__dirname + '/files/fileToCompress.txt');
    const unziper = createGunzip();
    await pipe(sourse, unziper, destination);
    console.log('file unziped');
};

await decompress();