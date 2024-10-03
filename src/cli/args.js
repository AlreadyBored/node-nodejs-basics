const PREFIX = '--'

const parseArgs = () => {
    const res = process.argv
        .slice(2)
        .reduce((acc, item, index, array) => {
            if (item.startsWith(PREFIX)) {
                const formatted = `${item.replace(PREFIX, '')} is ${array[index + 1]}`;
                return [...acc, formatted];
            }
            return acc;
        }, []);

    console.log(res.join(', '));
};

parseArgs();
