import { Transform } from 'node:stream'
import { stdin, stdout } from 'node:process';
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const transform = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);


    stdin.pipe(new Transform({
        transform(chunk, encoding, callback) {
            callback(null, String(chunk).split('').reverse().join(''));
        },
    })).pipe(stdout);
};

await transform();