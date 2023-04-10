import { Transform, pipeline } from 'stream';
import { stdin, stdout } from 'process';

const transform = async () => {
    const transformer = new Transform({
        transform(chunk, _encoding, callback) {
            const data = String(chunk);
            const reversed = data.split('').reverse().join('').concat('\n'); 
            callback(null, reversed);        
        }
    });
    
    const input = stdin;
    const output = stdout;

    pipeline(input, transformer, output, err => stdout.write(String(err)));
};

await transform();