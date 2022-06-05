import { fork } from "child_process"

export const spawnChildProcess = async (args) => {
  const child = fork("./src/cp/files/script.js", args, { silent: true })

  process.stdin.pipe(child.stdin)

  child.stdout.on("data", (data) => {
    console.log(data.toString())
  })

  child.stderr.on("data", (data) => {
    console.log(data.toString())
  })

  child.on("close", (code) => {
    console.log(code)
  })
}

spawnChildProcess(process.argv.slice(2))
