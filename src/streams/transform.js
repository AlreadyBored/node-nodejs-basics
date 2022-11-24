import { Transform } from "stream";

function reverseString(data) {
  return `${data.toString().split("").reverse().join("").trim()}\n`;
}

const transform = async () => {
  const reversText = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reverseString(chunk));
    },
  });
  process.stdout.write('Enter some text or q to exit!\n');
  process.stdin.pipe(reversText).pipe(process.stdout);
};

await transform();
