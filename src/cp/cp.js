import child_process from 'child_process'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const spawnChildProcess = async (args) => {
    const path = dirname(fileURLToPath(import.meta.url)) + '\\files\\script.js'
    const child = child_process.fork(path, [...args])
}
