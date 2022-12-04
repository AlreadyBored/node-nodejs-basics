import { fork } from "child_process"
import { getFilesPath } from "../utils/index.js"

const spawnChildProcess = async args => {
  // Write your code here
  const script = getFilesPath(import.meta.url, "script.js")
  const child = fork(script, args, { stdio: "pipe" })
  process.stdin.pipe(child.stdin)
  child.stdout.pipe(process.stdout)
}

spawnChildProcess()
