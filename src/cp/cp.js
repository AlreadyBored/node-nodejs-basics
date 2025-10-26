import { fork } from 'child_process'
import { __dirname } from '../utils.js'
import { join } from 'path'

const spawnChildProcess = async (args=[]) => {
  const myChildProcess = fork(join(__dirname, 'cp', 'files', 'script.js'),args, {stdio: ['pipe', 'pipe', 'inherit', 'ipc']}
  )

  process.stdin.pipe(myChildProcess.stdin);
  myChildProcess.stdout.pipe(process.stdout);

  myChildProcess.on('exit', (msg) => {
    console.log(`Child process exited with code ${msg}`)
  })
}

spawnChildProcess(['one', 'two', 'three'])
