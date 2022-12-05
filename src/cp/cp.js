import { spawn } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
const spawnChildProcess = async (args) => {
    const childScript = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'script.js'
    )
    console.log('Spawn child process. To close child type "CLOSE"')
    const child = spawn('node', [childScript, ...args])

    process.stdin.on('data', (data) => {
        console.log('This string send to child process ', data.toString())
        child.stdin.write(data)
    })

    child.stdout.on('data', (data) => {
        console.log(
            'This string received from child process: ',
            data.toString()
        )
    })

    child.on('close', (code) => {
        console.log('Child process closed with code ', code)
    })
}

spawnChildProcess(['--RSS-Arg', '--RSS-Data', '--RSS-Option'])
