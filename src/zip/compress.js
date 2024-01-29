import "stream";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";

const compress = async () => {
    const gzip = createGzip()
    const path = 'src/zip/files/fileToCompress.txt'
    const fileStream = createReadStream(path)
    const archive = createWriteStream("src/zip/files/archive.gz")
    pipeline(fileStream, gzip, archive, (err) => {        
        if (err){
        throw Error(err)
    }})
}

await compress();