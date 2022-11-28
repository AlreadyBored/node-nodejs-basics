const parseArgs = () => {
    let result = process.argv
        .splice(2)
        .reduce((acc, elem, i, array) => {
            if (elem.startsWith('--')) {
                return [...acc, `${elem.slice(2)} is ${array[++i]}`]
            }
            return acc
        }, [])
        .join(', ')
    console.log(result)
}

parseArgs()
