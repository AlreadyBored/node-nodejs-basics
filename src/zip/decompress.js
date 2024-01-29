import "zlib";
import "fs";
import "stream";
import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";

const decompress = async () => {
    const archivePath = 'src/zip/files/archive.gz'
    const gunzip = createGunzip()
    const textPath = 'src/zip/files/fileToCompress.txt'
    const fileStream = createWriteStream(textPath)
    const archiveStream = createReadStream(archivePath)
    pipeline(archiveStream, gunzip, fileStream, (err) => {
        if (err){
            throw Error(err)
        }
    })
}
await decompress();