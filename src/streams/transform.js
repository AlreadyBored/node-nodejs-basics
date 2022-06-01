import { stdin, stdout } from 'node:process'
import { Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'

export const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      callback(
        null,
        chunk.toString().split('').reverse().join('').trim() + '\n'
      )
    },
  })

  await pipeline(stdin, reverseTransform, stdout)
}

transform()
