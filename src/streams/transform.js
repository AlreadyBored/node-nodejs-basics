import {Transform} from "stream";

const transform = async () => {
  const upperCaseTransformer = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse().join('') + '\n\n');
      callback();
    }
  });

  process.stdin.pipe(upperCaseTransformer).pipe(process.stdout);
};

await transform();