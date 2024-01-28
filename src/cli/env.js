import { env } from 'node:process'

const parseEnv = () => {
    // Write your code here
    const filteredEnv = Object.keys(env).filter((it) => it.startsWith('RSS_')).map((it) => `${it}=${env[it]}`).join('; ')
    console.log(filteredEnv)

};

parseEnv();