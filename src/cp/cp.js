import { spawn } from "child_process"
import path, { dirname } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const spawnChildProcess = async (args) => {
  const script = path.join(directoryName, "files/script.js")
  const childProcess = spawn("node", [script, ...args])
  process.stdin.pipe(childProcess.stdin)
  childProcess.stdout.pipe(process.stdout)

  childProcess.on("error", (error) => {
    console.error(`Error in child process: ${error.message}`)
  })

  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`)
  })
}

spawnChildProcess(["someArgument1", "someArgument2"])
