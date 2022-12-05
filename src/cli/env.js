const parseEnv = () => {
	let finalArr = Object.entries(process.env).reduce((acc, obj) => {
		if (obj[0].startsWith('RSS_')) acc.push(`${obj[0]}=${obj[1]}`)
		return acc
	}, [])

	console.log(finalArr.join('; '))
};

parseEnv();