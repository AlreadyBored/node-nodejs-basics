import { Transform, pipeline } from "node:stream"

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, enc, callback) {
      this.push(chunk.toString().trim().split("").reverse().join("") + "\n")

      callback()
    }
  })

  pipeline(process.stdin, transformStream, process.stdout, (err) => condole.log(err))
};

await transform();
