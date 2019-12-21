const env = process.env.NODE_ENV || 'development'

const configEnvs = {
	development: {
		defaultPort: 4000
	},
	production: {
		defaultPort: 4000
	},
	test: {
		defaultPort: 4000
	}
}

const config = configEnvs[env]

export { config }