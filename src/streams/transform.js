import { Transform } from "stream";

const terminalIn = process.stdin;
const terminalOut = process.stdout;

const reverseTransform = new Transform({
    transform(chunk, _, callback) {
        callback(null, chunk
                .toString()
                .split("")
                .reverse()
                .join("")
                .trim() + "\n")
    }
})

const transform = async () => {
  // Write your code here
  terminalIn.pipe(reverseTransform).pipe(terminalOut);
};

await transform();
