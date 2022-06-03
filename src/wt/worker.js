// n should be received from main thread
import { pipeline } from "stream/promises";
import { Transform } from "stream";
import { StringDecoder } from "string_decoder";
import { stdout, stdin } from "process";
const message = "Please type a number > 10!";

class TransNumber extends Transform {
  constructor(options) {
    super(options);
    this._decoder = new StringDecoder("utf-8");
  }
  _transform(chunk, encoding, callback) {
    let res = 1;
    chunk = this._decoder.write(chunk);
    res = nthFibonacci(chunk);
    if (res === chunk) {
      chunk = message;
    } else {
      chunk = res.toString();
    }
    callback(null, chunk);
  }
}

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  pipeline(stdin, new TransNumber(), stdout);
};
