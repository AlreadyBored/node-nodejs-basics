import path from 'path';
import { fileURLToPath } from 'url';
import { Transform, pipeline } from 'stream'

const dirName = path.dirname(fileURLToPath(import.meta.url));

const reversify = new Transform({
  transform (chunk, enc, cb) {
    this.push([...chunk.toString()].reverse().join(""));
    this.push('\n');
    cb();
  }
});

const transform = async () => {
    pipeline(
      process.stdin,
      reversify,
      process.stdout,
      (err) => {
        console.log(err);
      }
    ) 
};

await transform();