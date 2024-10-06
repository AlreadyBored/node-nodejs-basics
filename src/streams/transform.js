import { Transform } from 'stream';
const transform = async () => {
 const streamReverse = new Transform({
     transform(chunk, encoding, callback) {
         const reversed = chunk.toString().split('').reverse().join('');
         callback(null,reversed);
     }
 })
    process.stdin.pipe(streamReverse).pipe(process.stdout);
};

await transform();
