import httpStatusCodes from '../../../services/http/statusCodes'

import { t9 } from '../../../services/helpers/t9'
import { combineArrays } from '../../../services/helpers/arrays'

import { wordlist } from '../../../services/dictionary'

import { getCachedThenQuery } from '../../../services/caching'

const calculateT9Promise = async (nums, filtered) => {
	const results = nums.split('').reduce((allArr, arr) => combineArrays(allArr, t9[arr]), [''])

	const resultsFiltered = results.filter(result => wordlist.includes(result))
	if (filtered) {
		return resultsFiltered
	} else {
		return results
	}
}

const calculateT9 = async (req, res) => {
	const nums = req.query.nums
	const filtered = (req.query.filtered !== 'false') //defaults to false

	if (!nums)
		return res.status(httpStatusCodes('Bad Request')).end('Missing parameter')

	const result = await getCachedThenQuery('get-t9-'+nums+'-'+filtered, calculateT9Promise(nums, filtered))
	return res.status(httpStatusCodes('OK')).send(result)
}
export { calculateT9 }