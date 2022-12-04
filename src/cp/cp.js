import { fork } from 'child_process'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const spawnChildProcess = async args => {
  const child = fork(`${dir}/files/script.js`, [...args.split(' ')])

  process.stdin.on('data', msg => {
    child.stdin.write(msg)
  })
  process.stdout.on('data', data => {
    console.log('child process: ', data.toString())
  })

  child.on('error', err => {
    console.log('err: ', err)
  })
}

spawnChildProcess('--all --single --common')
