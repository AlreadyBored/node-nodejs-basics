export const parseEnv = () => {
    const rssVariables = Object.entries(process.argv).reduce(
        (acc, [_, value]) => {
            if (value.startsWith('RSS_')) {
                acc.push(value)
            }
            return acc
        },
        []
    )

    rssVariables.forEach((val, index) => {
        console.log(`${index}: ${val}`)
    })
}

parseEnv()
