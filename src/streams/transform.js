import Transform from "stream";

const transform = async () => {
  function reverseInputText() {
    const reverseStream = new Transform({
      transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split("").reverse().join("");
        this.push(reversedChunk);
        callback();
      },
    });
  }
  process.stdin.pipe(reverseInputText).pipe(process.stdout);
};

await transform();

// I couldn't do it((
