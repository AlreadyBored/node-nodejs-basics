import * as stream from 'stream';

const transform = async () => {
  const { stdin, stdout } = process;

  const transform = new stream.Transform({
    transform(chunk, enk, callback) {
      const result = chunk.toString('utf8').split('').reverse().join('');
      callback(null, result);
      process.exit();
    }
  });
  stdin.pipe(transform).pipe(stdout);
};
await transform();
