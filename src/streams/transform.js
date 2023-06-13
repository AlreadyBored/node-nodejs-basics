import stream from "node:stream";

const Reverse = new stream.Transform({
  transform(chunk, encoding, callback) {
    callback(
      null,
      chunk //
        .toString()
        .trim()
        .split("")
        .reverse()
        .join("")
    );
  },
});

const transform = async () => {
  stream.pipeline(
    //
    process.stdin,
    Reverse,
    process.stdout,
    (a) => {
      console.log(a);
    }
  );
};

await transform();
