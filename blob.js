const fs = require('fs')
const glob = require('glob')
const axios = require('axios')
//

const graphql = `http://localhost:${process.env.PORT || 4000}/graphql`
//

glob('./src/components/**/query.js', (er, files) => {
	files.map(async file => {
		try {
			const { data: { data: data} } = await axios.post(graphql, require(file))
			fs.writeFile(
				file.replace('query.js', 'data.json'),
				JSON.stringify(data),
				er => {if (er) console.log(er)}
			)
		}
		catch(er) {
			console.log(er)
		}
	})
})
