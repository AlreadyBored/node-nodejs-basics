import { spawn } from 'child_process'
import { getCombinedPath } from '../pathHelper.js'

const spawnChildProcess = async (args) => {
    if (args === undefined) args = []

    const pathToFile = getCombinedPath(import.meta.url, 'files', 'script.js')

    const subProcess = spawn('node', [pathToFile, ...args])

    process.stdin.pipe(subProcess.stdin)
    subProcess.stdout.pipe(process.stdout)
};

spawnChildProcess();