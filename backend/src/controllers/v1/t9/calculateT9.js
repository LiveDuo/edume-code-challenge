import httpStatusCode from '../../../services/http/statusCodes'

import { t9 } from '../../../services/helpers/t9'
import { combineArrays } from '../../../services/helpers/arrays'

import { wordlist } from '../../../services/dictionary'

const calculateT9 = (req, res) => {
	const input = req.query.nums
	const results = input.split('').reduce((allArr, arr) => combineArrays(allArr, t9[arr]), [''])
	const resultsFiltered = results.filter(result => wordlist.includes(result))
	return res.status(httpStatusCode('OK')).send(resultsFiltered)
}
export { calculateT9 }