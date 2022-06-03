export const parseEnv = () => {
    const keys = Object.keys(process.env)
    const arr = keys.filter((e) => {
        return e.slice(0, 4) === 'RSS_'
    })
    const res = arr.map((e) => e + '=' + process.env[e]).join('; ')
    process.stdout.write(res + '\n')
}
