import { argv } from 'node:process'

const parseArgs = () => {
	const cliArguments = argv.slice(2)
	for (let i = 0; i < cliArguments.length; i = i + 2) {
		const propName = cliArguments[i]
		const value = cliArguments[i + 1]

		process.stdout.write(`${propName} is ${value}, `)
	}
}

parseArgs()
