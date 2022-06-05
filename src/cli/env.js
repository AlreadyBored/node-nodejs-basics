import { env } from 'process'

const setEnvVariables = () => {
  env.RSS_name1 = 'value1'
  env.RSS_name2 = 'value2'
}

export const parseEnv = () => {
  setEnvVariables()

  const regexp = /^RSS_/
  Object.keys(env).forEach((key) => {
    if (regexp.test(key)) {
      console.log(`${key}=${env[key]}`)
    }
  })
}

parseEnv()
