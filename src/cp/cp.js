import { fork } from 'node:child_process'
import { resolve } from 'node:path'

const spawnChildProcess = async (args) => {
    const absoluteFilePath = await resolve('files', 'script.js')
    await fork(absoluteFilePath, args)
};

spawnChildProcess();