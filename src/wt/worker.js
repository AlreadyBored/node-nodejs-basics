// n should be received from main thread
import { pipeline } from "stream/promises";
import { Transform, Readable } from "stream";
import { StringDecoder } from "string_decoder";
import { stdout, stdin, exit } from "process";
import { Buffer } from "buffer";
import { error } from "console";

const message = `Please enter some number () 10 ... number ... 20) : `;
const s = new Readable();
const testNum = "12";

class TransNumber extends Transform {
  constructor(options) {
    super(options);
    this._decoder = new StringDecoder("utf-8");
  }
  _transform(chunk, encoding, callback) {
    let res = 1;
    chunk = this._decoder.write(chunk);
    if (+chunk < 50 && +chunk > 9) {
      res = nthFibonacci(+chunk);

      chunk = res.toString();

      callback(null, chunk);
    } else {
      callback(null, message);
    }
  }
}

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (stdin) => {
  pipeline(stdin, new TransNumber(), stdout);
};

// const buf = Buffer.from(testNum, "utf8");
// console.log(buf.toString());
// sendResult(Readable.from(buf));

sendResult(stdin);
