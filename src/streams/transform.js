import * as fs from 'fs';
import * as stream from 'stream';
import { stdin } from 'process';

export const transform = async () => {

    let transform = new stream.Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.reverse().toString());
        },
      });
      
    process.stdin.pipe(transform).pipe(process.stdout)
    
};

transform()

//Its hard to understand for me how transform works