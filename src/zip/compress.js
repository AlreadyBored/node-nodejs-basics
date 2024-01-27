import { createGzip } from 'node:zlib'
import { pipeline } from 'node:stream'
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url'


const __dirname = path.dirname(fileURLToPath(import.meta.url))


const gzip = createGzip();
const sourceFile = createReadStream(path.join(__dirname, 'files','fileToCompress.txt'));
const destinationFile = createWriteStream(path.join(__dirname, 'files','archive.gz'));

const compress = async () => {
    // Write your code here 
    pipeline(
        sourceFile,
        gzip,
        destinationFile,
        (err) => {
            if(err){
                console.log(err)
            }
        }
    )
};

await compress();