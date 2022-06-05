import { Transform, pipeline } from 'stream';
export const transform = async () => {
  const reverse = new Transform();
  reverse._transform = function (chunk, encoding, callback) {
    const data = chunk.toString().split('').reverse().join('');
    callback(null, data);
  };
  //   process.stdin.on('data', (data) => {
  //     reverse.push(data);
  //     process.stdout.write(reverse.pipe(data));
  //   });
  //   process.stdin.pipe(reverse).pipe(process.stdout.write());
  //   pipeline(process.stdin.read(), process.stdout.write());
  console.log(process.stdin.read());
};
transform();
