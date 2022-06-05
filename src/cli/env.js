export const parseEnv = () => console.log(
    Object.keys(process.env)
        .filter(key => process.env.hasOwnProperty(key) && key.startsWith('RSS_'))
        .map(key => `${key}=${process.env[key]}`)
        .join('; ')
)
