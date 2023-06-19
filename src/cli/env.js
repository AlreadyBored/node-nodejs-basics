const prefix = 'RSS_'
const parseEnv = () => {
    const rssVars = Object.entries(process.env).reduce((acc, [key, value]) => {

        if(key.startsWith(prefix)){

            return acc ? acc + "; " + key + '=' + value :  key + '=' + value

        } else {

            return acc

        }

    }, "" )

    console.log(rssVars)

}

parseEnv()
