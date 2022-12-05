import fstream from 'stream'

const transform = async () => {
    let input = process.stdin
    let output = process.stdout
    let rev = new fstream.Transform({
        transform(text, enc, cb) {
            this.push(`${text.toString().trim().split('').reverse().join('')}\n`)
            cb()
        }
    })
    fstream.pipeline(input, rev, output, () => {})
};

await transform();