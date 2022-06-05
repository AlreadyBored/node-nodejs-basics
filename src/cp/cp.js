import { spawn } from 'child_process'

const PATH = './files/script.js'

export const spawnChildProcess = async (args) => {
  const child = spawn('node', [PATH, args])
  child.stdout.pipe(process.stdout)
  child.stdin.write('test1 test2')
  child.stdin.end()
}

spawnChildProcess()
