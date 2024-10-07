import { spawn } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const spawnChildProcess = async (args) => {
    let initiated = false

    const chProcess = spawn(`node`, [
        `${__dirname}/files/script.js`,
        ...args.split(' '),
    ])
    process.stdin.on('data', (msg) => {
        chProcess.stdin.write(msg)
    })

    chProcess.stdout.on('data', (data) => {
        console.log(data.toString())
        if (!initiated) {
            console.log('Write anything to console ...' + '\n')
            initiated = true
        }
    })
}

spawnChildProcess('--silent --all')
