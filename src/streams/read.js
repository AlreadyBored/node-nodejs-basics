import stream from 'stream'
import fs from 'fs'

const read = async () => {
        const fileStream = fs.createReadStream('path to file');

    console.log(fileStream.pipe('131'))
};

await read();