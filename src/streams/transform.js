import { Transform, pipeline } from 'stream';
import { EOL } from 'os';
import { customError } from "../fs/fs-constants.js";

const revertString = (string) => string.replace(EOL, '').split('').reverse().join('');

// class MyTransform extends Transform {
//   _transform(chunk, encoding, callback) {
//     const reversedChunk = revertString(chunk.toString());
//
//     callback(null, reversedChunk);
//   }
// }
//
// const transform = async () => {
//   const reverseStream = new MyTransform();
//
//   pipeline(
//       process.stdin,
//       reverseStream,
//       process.stdout,
//       () => {
//         throw new Error(customError);
//       }
//   )
// }

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = revertString(chunk.toString());

      callback(null, reversedChunk);
    }
  });

  // process.stdin.pipe(reverseStream).pipe(process.stdout);
  pipeline(
    process.stdin,
    reverseStream,
    process.stdout,
    () => {
      throw new Error(customError);
    }
  )
};

await transform();