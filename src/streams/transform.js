import { Transform } from "node:stream";

const transform = async () => {
  const stream = new Transform({
    transform(chunk, encoding, callback) {
      const content = chunk.toString();

      let transformContent = "";
      if (content.endsWith("\n")) {
        transformContent = content
          .slice(0, content.length - 1)
          .split("")
          .reverse()
          .join("");
      }
      callback(null, `${transformContent}\n`);
    },
  });

  process.stdout.write("Input your data\n");
  process.stdout.write("Press Ctrl+C for exit\n");
  process.stdin.pipe(stream).pipe(process.stdout);
};

await transform();
