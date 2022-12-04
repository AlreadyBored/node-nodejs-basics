import { fork } from "child_process"

const spawnChildProcess = async args => {
  // Write your code here
  const script = "./src/cp/files/script.js"
  const child = fork(script, args, { stdio: "pipe" })
  process.stdin.pipe(child.stdin)
  child.stdout.pipe(process.stdout)
}

spawnChildProcess()
