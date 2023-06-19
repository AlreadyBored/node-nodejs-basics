import stream from "stream";

const transform = async () => {
  function transform(chunk, _, callback) {
    const data = chunk.toString().trim();
    let reversed = "";

    for (let i = data.length - 1; i >= 0; i--) {
      reversed += data[i];
    }

    process.stdout.write(reversed);
    this.push("\n\n");
    callback();
  }

  const transformStream = new stream.Transform({ transform });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
