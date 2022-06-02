import { env } from 'process'

export const parseEnv = () => {
    const accumulator = []
    for (const property in env) {
        if (property.startsWith('RSS_')) {
            accumulator.push(`${property}=${env[property]}`)
        }
    }
    console.log(accumulator.length > 0 ? accumulator.join('; ') : 'There is no valid environment variables')
}

parseEnv()
