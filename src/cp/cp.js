import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { access } from "fs/promises";
import { fork } from 'child_process'
import {pipeline, Transform} from "stream";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const exists = async(path) => {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const markCP = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, `CP:\x1b[36m ${chunk.toString()}\x1b[0m`);
  },
})

const path = join(__dirname, 'files', 'script.js')
const isFileExists = await exists(path)
if (!isFileExists) throw new Error('Script not exists')


export const spawnChildProcess = async (args) => {
  const child = fork(
    path,
    [...args],
    {stdio: ['pipe', 'pipe', 'pipe', 'ipc']}
  );

  pipeline(
    child.stdout,  markCP,process.stdout,
    (err) => {
      if (err) {
        console.error('Pipeline filed', err)
      } else {
        console.log('Pipeline succeeded')
      }
    }
  )
  process.stdin.pipe(child.stdin)


  child.stdout.on('data',
    (data) => {
    console.info(`Received from child process:\n ${data.toString()}`);
  })

  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
    process.exit(1)
  })

  child.stderr.on('data',
    (data) => {
      console.info(`stderr: ${data}`);
    })

};

// test
console.clear()
const args = process.argv.slice(2);
await spawnChildProcess(args)