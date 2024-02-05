import { env } from 'node:process'

const parseEnv = () => {
	const rssVariables = Object.keys(env).filter((key) => key.startsWith('RSS_'))
	for (let i = 0; i < rssVariables.length; i++) {
		process.stdout.write(`${rssVariables[i]}=${env[rssVariables[i]]}; `)
	}
}

parseEnv()
