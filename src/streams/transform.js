import { Transform, pipeline } from "stream"

export const transform = async () => {
  const readable = process.stdin
  const writable = process.stdout

  const transform = new Transform({
    transform(chunk, _, cb) {
      const chunkStringify = chunk.toString().trim()
      const reverse = chunkStringify.split("").reverse().join("")

      cb(null, reverse + "\n")
    },
  })

  pipeline(readable, transform, writable, (err) => {
    console.error(err)
  })
}

transform()
