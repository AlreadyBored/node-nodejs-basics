import { stdin, stdout } from 'process'
import { Transform } from 'stream'

export const transform = async () => {
  const transformData = new Transform({
    transform(chunk, encoding, cb) {
      cb(null, chunk.toString().split('').reverse().join(''))
    },
  })
  stdin.pipe(transformData).pipe(stdout)
}

transform()
