import stream from "stream";

const transform = async () => {
  // process.stdin.on('pipe', new stream.Transform({
  //   transform(chunk, encoding, callback) {
  //     callback(null, JSON.stringify(chunk));
  //   }})).pipe(process.stdout)
  stream.pipeline(process.stdin,new stream.Transform({
    transform(chunk, encoding, callback) {
      callback(null, JSON.stringify(chunk));
    }}), process.stdout)
};

await transform();