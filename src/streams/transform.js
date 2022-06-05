import { Transform } from 'stream';

export const transform = async () => {
  const reverse = (s) => {
    return [...s].reverse().join('');
  };

  const myTransform = new Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
      const data = reverse(chunk);
      callback(null, data);
    }
  });

  myTransform.setEncoding('ascii');
  myTransform.on('data', (chunk) => process.stdout.write(chunk));
  myTransform.write(JSON.stringify(process.stdin));
};

transform();

