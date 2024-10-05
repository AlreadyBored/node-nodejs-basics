
//  implement function that decompresses archive.gz back to the fileToCompress.txt
//  with same content as before compression using zlib and Streams API
import { open } from 'fs/promises'
import { pipeline } from 'stream/promises'
import { createWriteStream } from 'fs'
import { createGunzip } from 'zlib'

const decompress = async () => {
    try {
        const fh = await open('archive.gz')
        const rs = fh.createReadStream()
        const ws = createWriteStream('files/fileToCompress.txt')

        const gunzip = createGunzip()
    
        await pipeline(
            rs,
            gunzip,
            ws
        )

    } catch(err) {

    }

};

await decompress();