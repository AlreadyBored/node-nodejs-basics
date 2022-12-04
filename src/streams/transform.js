import { stdin, stdout } from "process";
import { Transform, pipeline } from 'stream';
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const transform = async () => {
    const readStream = fs.createReadStream(path.resolve(__filename), 'utf-8');
    const writeStream = fs.createWriteStream(path.resolve(__filename), 'utf-8');

    pipeline(
        readStream,
        writeStream,
        err => {
            if (err) throw err;
        }
    )

    const transform = new Transform({
        transform(data, encoding, callback) {
            callback(null, data.toString().split('').reverse().join(''));
        }
    });

    stdin.pipe(transform).pipe(stdout);
};

await transform();
