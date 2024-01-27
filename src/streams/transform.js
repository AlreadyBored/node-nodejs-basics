import stream from 'node:stream';
const transform = async () => {
  const reverseStream = new stream.Transform({
    transform(data, _, callback) {
      const first = data.slice(0, Math.max(0, data.length - 2));
      const second = Buffer.from('\n');
      callback(null, Buffer.concat([first.reverse(), second]));
    }
  });
  process.stdin.pipe(reverseStream).pipe(process.stdout)
};

await transform();