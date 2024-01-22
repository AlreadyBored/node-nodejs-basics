import { spawn } from 'child_process'
import { join } from 'path'
import { getDirname } from '../dirname.js'

const __dirname = getDirname(import.meta.url)

const spawnChildProcess = async (args) => {
    const filePath = join(__dirname, 'files', 'script.js')
    const childProcess = spawn('node', [filePath, ...args], { stdio: ['pipe', 'pipe', 'inherit'] })

    process.stdin.pipe(childProcess.stdin)
    childProcess.stdout.pipe(process.stdout)
}

const args = ['arg1', 'arg2']
spawnChildProcess(args)
