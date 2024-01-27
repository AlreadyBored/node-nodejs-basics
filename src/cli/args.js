const parseArgs = () => {
    const parsedArgs = process.argv.slice(2).reduce(
        (result, item, index, array) => {
        if (index % 2 === 0) {
            const propValue = item.replace(/--/g, '')
            result.push(`${propValue} is ${array[index + 1]}`)
        }

        return result
    }, []).join(', ')

    console.log(parsedArgs)
};

parseArgs();