'use strict'

export const parseEnv = () => {
    let output = ``

    const varNames = Object.keys(process.env).filter(key => key.match(/^RSS_/))

    console.log(varNames.map(key => {
        const value = process.env[key]
        return `${key}=${value}`
    }).join(`;`))

    // Write your code here 
};
