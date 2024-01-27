import { createUnzip } from 'node:zlib'
import { pipeline } from 'node:stream'
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url'


const __dirname = path.dirname(fileURLToPath(import.meta.url))


const unzip = createUnzip();
const sourceFile = createReadStream(path.join(__dirname, 'files','archive.gz'))
const destinationFile = createWriteStream(path.join(__dirname, 'files','fileToCompress.txt'));;

const decompress = async () => {
    // Write your code here 
    pipeline(
        sourceFile,
        unzip,
        destinationFile,
        (err) => {
            if(err){
                console.log(err)
            }
        }
    )
};

await decompress();