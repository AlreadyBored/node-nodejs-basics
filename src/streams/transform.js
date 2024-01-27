import { Transform, pipeline }  from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    // Write your code here 
    const myTransform = new Transform({
  transform(chunk, enc, callback) {
    let reversed = chunk.toString().trim().split('').reverse().join('')
    callback(null,reversed + '\n')
  },
}); 
  pipeline(
    stdin,
    myTransform,
    stdout,
    (err) => console.log(err)
)
};

await transform();