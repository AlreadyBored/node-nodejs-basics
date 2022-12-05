import { Transform } from 'stream';

const transform = async () => {
  const reverseData = () => {
    return new Transform({
      transform(chunk, enc, callback) {
        const revers = chunk.toString().revers();
        callback(null, revers);
      },
    });
  };
  process.stdin.pipe(through(reverseData)).pipe(process.stdout);
  //   process.stdin.on('data', (data) => {
  //     const reversStr = reverseData(data);
  //     process.stdout.write(reversStr);
  //   });
};

await transform();
