import { Transform } from 'node:stream';

const reverseTransform = new Transform({
  transform(data, enc, cb) {
    this.push(data.toString().split('').reverse().join(''));
    cb();
  },
});

const transform = () => {
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

transform();
