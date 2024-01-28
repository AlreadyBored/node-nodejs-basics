import { fork } from 'node:child_process'

const spawnChildProcess = async (args) => {
  // Write your code here

  const SCRIPT = './files/script.js'
  const SCRIPT_URL = new URL(SCRIPT, import.meta.url)

  const cp = fork(SCRIPT_URL, args, { silent: true })

  process.stdin.pipe(cp.stdin)
  cp.stdout.pipe(process.stdout)
}

// Put your arguments in function call to test this functionality
await spawnChildProcess(/* [someArgument1, someArgument2, ...] */)
