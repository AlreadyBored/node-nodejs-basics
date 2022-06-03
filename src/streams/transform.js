import {Transform,Writable} from "stream";
export const transform = async () => {
  let transformStream = new TransFormStream();
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

class TransFormStream extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      let resultString = chunk.toString().split("").reverse().join("")+"\n";
      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

transform();
