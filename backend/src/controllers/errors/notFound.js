import httpStatusCode from '../../services/http/statusCodes'

const notFound = (req, res) => {
	return res.status(httpStatusCode('Not Found')).send('Not Found')
}
export { notFound }