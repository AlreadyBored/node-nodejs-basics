import { fork } from 'child_process'
import path from 'path'
import { getFilePath } from '../tools/filepath.js'
const spawnChildProcess = async (args) => {
	const { __dirname } = getFilePath(import.meta.url)
	const scriptFilePath = path.join(__dirname, 'files', 'script.js')
	const cp = fork(scriptFilePath, args)

	cp.on('close', (code) => {
		console.log(`Child process exited with code ${code}`)
	})
}

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3])
