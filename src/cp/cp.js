'use strict'

import { spawn } from 'child_process'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const fName = resolve(dirname(fileURLToPath(import.meta.url)), `files`, `script.js`)

export const spawnChildProcess = async (args) => {
  let cpOutput = ``

  const cp = spawn(process.argv[0], [fName, ...args])

  process.stdin.pipe(cp.stdin)
  cp.stdout.pipe(process.stdout)

  return new Promise(resolve => { cp.on('close', resolve) })

  // Write your code here
};
