import { Transform } from "stream";

const { stdin, stdout } = process;

const transform = async () => {
    console.log('Type smth:');
    const reversedTransform = function () {
      return new Transform({
        transform(chunk, _, callback) {
          this.push(chunk.toString().split("").reverse().join(""));
          callback();
          process.exit();
        },
      });
    };
  
    stdin.pipe(reversedTransform()).pipe(stdout);
};

await transform();