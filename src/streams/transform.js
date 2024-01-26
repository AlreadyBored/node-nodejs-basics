import {Transform} from 'stream';


const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      this.push([...chunk.toString()].reverse().join(''));
      callback();
    },
    encoding: 'utf-8'
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
