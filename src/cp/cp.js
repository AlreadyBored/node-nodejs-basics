import { fork } from 'node:child_process'
import { resolve } from 'node:path'
import { argv, cwd, stdin, stdout } from 'node:process'

export const spawnChildProcess = async (args) => {
  const modulePath = resolve(cwd(), 'src/cp/files', 'script.js')
  const child = fork(modulePath, args, { silent: true })

  stdin.pipe(child.stdin)
  child.stdout.pipe(stdout)
}

spawnChildProcess(argv.slice(2))
