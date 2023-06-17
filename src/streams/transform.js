import {  } from 'stream/promises';
import { Transform, pipeline } from 'stream';
import {EOL} from 'os'


    const writeStream = process.stdout;
    const readStream = process.stdin;

    const transformStream = new Transform({
      transform(chunk, enc, cb) {
        try{
            const chunkString = chunk.toString().trim();
            const reverseChunk = chunkString.split('').reverse().join('');
            cb(null, reverseChunk + EOL)
        }catch(err){
            cb(err)
        }
      },
    });

const transform = async () => {


     pipeline(
        readStream,
        transformStream,
        writeStream,
        err => {console.log('some error')}
    )
  // Write your code here
};

await transform();
