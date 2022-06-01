export const spawnChildProcess = async (args) => {
  //--------------------preparing------------------
  import { fileURLToPath } from "url";
  import { dirname, join } from "path";
  import { access } from "fs/promises";

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const path = join(__dirname, 'files', 'script.js')

  const isFileExists = await exists(path)
  if (!isFileExists) throw new Error('File not exists')

  async function exists(path) {
    try {
      await access(path)
      return true
    } catch {
      return false
    }
  }

  console.clear()

//-------------------------solution--------------------
  import { fork } from 'child_process'
  const child = fork(
    path,
    [...args],
    {stdio: ['pipe', 'pipe', 'pipe', 'ipc']}
  );

  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  })

};