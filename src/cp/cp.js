import { getFileDirName } from '../utils/utils.js'
import { join } from 'path'
import { fork } from 'child_process'

export const spawnChildProcess = async (args) => {
    const { __dirname } = await getFileDirName(import.meta.url)
    const scriptPath = join(__dirname, 'files', 'script.js')
    fork(scriptPath, args)
    process.stdin.on('data', (data) => process.stdout.write(`Recieved from child process: ${data.toString()}`));
}

spawnChildProcess(process.argv)
