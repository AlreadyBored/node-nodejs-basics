import { stdin, stdout } from 'node:process'
const transform = async () => {
    stdout.write('Please type in console\n')
    stdin.on('data', (data) => {
        data = data.toString().split('').reverse().join('')
        stdout.write(data + '\n')
    })
}

await transform()
