export const parseEnv = () => {
    const commonLine = 'RSS_';
    const arr = [];
    for (let [key, value] of Object.entries(process.env)) {
        if (key.includes(commonLine) && key.split('_')[0] === commonLine.replace('_', '')) {
            arr.push(`${key}=${value}`);
        }
    }

    console.log(arr.join('; '))
};
