import { Transform } from "stream";

const transform = async () => {
  process.stdin.on("data", (data) => {
    const reverseStream = new Transform({
      transform(data, encoding, callback) {
        const reversedData = data.toString().split("").reverse().join("");
        callback();
        process.stdout.write(reversedData);
      },
    });

    reverseStream.write(data.toString());
  });
};

await transform();
