import readline from 'readline'

process.stdin.setEncoding('utf8');
process.stdin.resume()

const transform=async () => {

    const readLine=readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    readLine.on('line',(line) => {
        console.log(line.split('').reverse().join(''))
    })

}
await transform();