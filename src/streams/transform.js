import readline from 'readline'

process.stdin.setEncoding('utf8');
// process.stdin.resume()

const transform=async () => {

    console.log('Enter text\n')

    process.stdin.on('data', (data) => {
        data = data.split('').reverse().join('')
        
        process.stdout.write(data,(err) => {
            if(err) throw new Error
        })
    })

}
await transform();