import { Readable, Transform, Writable } from 'stream'

export const transform = async () => {
    const reading = new reader()
    const writing = new writer()
    const transforming = new transform()
    reading.pipe(transforming).pipe(writing)
}

class reader extends Readable {
    _read() {
        process.stdin.resume()
        process.stdin.once('data', (res) => {
            this.push(res)
        })
    }
}

class writer extends Writable {
    _write(chunk, encoding, callback) {
        process.stdout.write(chunk.toString() + '\n')
        callback()
    }
}

class transform extends Transform {
    _transform(chunk, encoding, callback) {
        let buf = Buffer.from(
            chunk.toString().replace(/\r\n/g, '').split('').reverse().join('')
        )
        this.push(buf)
        callback()
    }
}
