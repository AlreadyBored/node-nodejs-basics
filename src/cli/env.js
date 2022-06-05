export const parseEnv = () => {
    // Write your code here

    Object
        .keys(process.env)
        .forEach(function (key, index) {
        if (key.slice(0,4) === 'RSS_') {
            console.log(key + index + '=' + process.env[key] + index);
        }
    })
};