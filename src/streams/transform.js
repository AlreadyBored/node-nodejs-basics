import { pipeline } from 'stream/promises'
import { Transform } from 'node:stream'

const transform = async () => {
  // Write your code here

  const readableFromTerminal = process.stdin
  const writableToTerminal = process.stdout

  const myTransform = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        chunk.toString().split('').reverse().join('').trim() + '\n',
      )
    },
  })

  await pipeline(readableFromTerminal, myTransform, writableToTerminal)
}

await transform()
