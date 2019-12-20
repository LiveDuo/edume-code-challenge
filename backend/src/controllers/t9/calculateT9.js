import httpStatusCode from '../../services/http/statusCodes'

const calculateT9 = (req, res) => {
	return res.status(httpStatusCode('OK')).send('OK')
}
export { calculateT9 }