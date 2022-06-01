export const transform = async () => {
  import { pipeline, Transform } from "stream";

  console.clear()
  console.info('Type something. Press CONTROL+C to kill the script.')

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