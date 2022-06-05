import { pipeline, Transform } from 'stream';

export const transform = async () => {
  const transformStream = () =>
    new Transform({
      transform(chunk, encoding, callback) {
        const changedData = chunk.toString().trim().split('').reverse().join('');
        callback(null, changedData + '\n');
      }
    });
  console.log('Transform:');
  pipeline(process.stdin, transformStream(), process.stdout, (err) => {
    console.log(err);
  });
};

transform();
