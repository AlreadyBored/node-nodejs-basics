
const PREFIX = 'RSS_'
const SEPARATOR = '; '

// const getPrefixEnvs = () => Object.keys(process.env)
//     .flatMap(key => key.startsWith(PREFIX) ? `${key}:${process.env[key]}` : [])
//     .join('; ')

const getPrefixEnvs = () => Object.keys(process.env)
    .filter(key => key.startsWith(PREFIX))

const parseEnv = () => {
    console.log(getPrefixEnvs().map((key) => `${key}:${process.env[key]}`).join('; '))
};

parseEnv();