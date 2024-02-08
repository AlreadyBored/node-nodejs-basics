import { argv } from 'node:process'

const parseArgs = () => {
	const cliArguments = argv.slice(2)
	const results = cliArguments
		.filter((_, index) => index % 2 === 0)
		.map((name, index) => `${name.slice(2)} is ${cliArguments[index * 2 + 1]}`)
		.join(', ')
	console.log(results)
}

parseArgs()
