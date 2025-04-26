import {stdin, stdout} from 'process'
import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform=new Transform({
        transform(chunk,encoding,callback){
            this.push(chunk.toString().split('').reverse().join('')+'\n');
            callback();
        }
    })
    stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();