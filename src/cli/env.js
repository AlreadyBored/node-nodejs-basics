import { env } from 'node:process'

const parseEnv = () => {
	const result = Object.keys(env)
		.filter((key) => key.startsWith('RSS_'))
		.map((variable) => `${variable}=${env[variable]}`)
		.join('; ')
	// for (let i = 0; i < rssVariables.length; i++) {
	// 	process.stdout.write(`${rssVariables[i]}=${env[rssVariables[i]]}; `)
	// }
	console.log(result)
}

parseEnv()
