import { env } from 'node:process'

const parseEnv = () => {
	const result = Object.keys(env)
		.filter((key) => key.startsWith('RSS_'))
		.map((variable) => `${variable}=${env[variable]}`)
		.join('; ')
	console.log(result)
}

parseEnv()
