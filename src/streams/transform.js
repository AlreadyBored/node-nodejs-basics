import { Transform } from "stream"

class TextToEmojis extends Transform {
  constructor(emoji) {
    super()
    this.emoji = emoji
  }

  _transform(chunk, encoding, callback) {
    const transformChunk = [...chunk].map(_ => this.emoji).join("")
    this.push(transformChunk)
    callback()
  }

  _flush(callback) {
    callback()
  }
}

const transform = async () => {
  // Write your code here
  const inStream = process.stdin
  const outStream = process.stdout
  const emoji = "🎄"
  const transformStream = new TextToEmojis(emoji)

  inStream.pipe(transformStream).pipe(outStream)
}

await transform()
