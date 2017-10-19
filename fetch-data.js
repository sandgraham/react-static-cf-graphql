const fs = require('fs')
const glob = require('glob')
const axios = require('axios')
//

const graphql = `http://localhost:${process.env.PORT || 4000}/graphql`
//

glob('./src/components/**/index.js', (er, files) => {
	files.map(async file => {
		const query = require(file).query
		if (query) {
			try {
				const { data: { data: data} } = await axios.post(graphql, { query })
				fs.writeFile(
					file.replace('index.js', 'data.json'),
					JSON.stringify(data),
					er => {if (er) console.log(er)}
				)
			}
			catch(er) {
				console.log(er)
			}
		}
	})
})