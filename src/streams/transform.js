import { pipeline, Transform } from "stream";

export const transform = async () => {
  const reversesStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  })

  pipeline(
    process.stdin, reversesStream, process.stdout,
    (err) => {
      if (err) {
        console.error('Pipeline filed', err)
      } else {
        console.log('Pipeline succeeded')
      }
    }
  )
};

// test
console.clear()
console.info('Type something. Press CONTROL+C to exit.')
await transform()

