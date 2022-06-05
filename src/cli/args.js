export const parseArgs = () => {
    // Write your code here

    Object
        .keys(process.env)
        .forEach(function (key, index) {

            console.log('prop' + index + key + ' is ' + process.env[key] + index);

        })
};