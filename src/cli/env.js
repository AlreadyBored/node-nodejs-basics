const parseEnv = () => {
    let finalArr = Object.entries(process.env).reduce((acc, obj) => {
        obj[0].startsWith('RSS_') && acc.push(`${obj[0]}=${obj[1]}`)
        return acc
    }, [])
    console.log(finalArr.join('; '))
};

parseEnv();