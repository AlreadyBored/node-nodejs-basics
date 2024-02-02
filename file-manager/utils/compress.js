import { createBrotliCompress } from 'node:zlib'
import { pipeline } from 'node:stream'
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import path from 'node:path'

const brotliCompress = createBrotliCompress();


export const compress = async (dir,arg,argTwo) => {
    let filePath = path.resolve(arg)
    let fileName = path.basename(filePath)
    let destination = path.resolve(argTwo)
    const sourceFile = await createReadStream(filePath);
    const destFile = await createWriteStream(`${destination}/${fileName}`)
    pipeline(
        sourceFile,
        brotliCompress,
        destFile,
        (err) => {
            if(err){
                console.log(err)
            }
        }
    )
};
