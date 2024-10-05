
//  implement function that compresses file fileToCompress.txt 
// to archive.gz using zlib and Streams API
import { createGzip } from 'zlib'
import { open } from 'fs/promises'
import { createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'

const compress = async () => {
    try {
        const fh = await open('files/fileToCompress.txt')
        const rs = fh.createReadStream()

        const gzip = createGzip()

        await pipeline(
            rs,
            gzip,
            createWriteStream('archive.gz'),
        )
    } catch(err) {
        throw new Error(err)
    }
};

await compress();