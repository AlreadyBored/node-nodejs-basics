import { pipeline } from "stream/promises";
import { Transform } from "stream";
import { StringDecoder } from "string_decoder";
import { stdout, stdin } from "process";

class Reverce extends Transform {
  constructor(options) {
    super(options);
    this._decoder = new StringDecoder("utf-8");
  }
  _transform(chunk, encoding, callback) {
    chunk = this._decoder.write(chunk);
    let newStr = "";
    for (let i = chunk.length - 1; i >= 0; i--) {
      newStr += chunk[i];
    }
    chunk = newStr;
    callback(null, chunk);
  }
}

export const transform = async () => {
  await pipeline(stdin, new Reverce(), stdout);
};
transform().catch(console.error);
