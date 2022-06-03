import { env } from 'process'

export const parseEnv = () => {
  // for (const key in env) {
  //   if (key.startsWith('RSS_')) {
  //     console.log(`${key}=${env[key]};`)
  //   }
  // }

  return Object.entries(env)
    .reduce((acc, [key, value]) => {
      return key.startsWith('RSS_') ? acc.push(`${key}=${value}`) && acc : acc
    }, [])
    .join('; ')
}

console.log(parseEnv())
