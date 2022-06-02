import { Transform, pipeline } from "stream";

export const transform = async () => {
  class myTransform extends Transform {
    constructor(options = {}) {
      super(options);
    }
    _transform(chunk, enc, cb) {
      const newChunk = chunk.toString().split("").reverse().join("");
      this.push(newChunk);
      cb();
    }
  }

  const transformStream = new myTransform();
  pipeline(process.stdin, transformStream, process.stdout, (error) => {});
};
transform();
