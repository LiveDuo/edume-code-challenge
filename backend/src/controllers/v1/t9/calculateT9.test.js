import httpStatusCodes from '../../../services/http/statusCodes'
import request from 'supertest'

import { app } from '../../../services/http'

describe('/{version}/t9/calculate', () => {
	it('should return bad request if query string is not set', async () => {
		const res = await request(app).get('/v1/t9/calculate').send().set('Accept', 'application/json')

		expect(res.statusCode).toEqual(httpStatusCodes('Bad Request'))
	})

	it('should return [\'apples\'] array if query string is 27753', async () => {
		const res = await request(app).get('/v1/t9/calculate?nums=27753').send().set('Accept', 'application/json')

		expect(res.headers['content-type']).toMatch(/application\/json/)
		expect(res.body.length).toEqual(1) // 3 * 4 * 4 * 3 * 3 = 432
		expect(res.statusCode).toEqual(httpStatusCodes('OK'))
	})
	
	it('should return empty array if query string is 27755', async () => {
		const res = await request(app).get('/v1/t9/calculate?nums=27755').send().set('Accept', 'application/json')
		
		expect(res.headers['content-type']).toMatch(/application\/json/)
		expect(res.body).toEqual([])
		expect(res.statusCode).toEqual(httpStatusCodes('OK'))
	})
	
	it('should return 9 elements if query string is 23 and not filtered', async () => {
		const res = await request(app).get('/v1/t9/calculate?nums=23&filtered=false').send().set('Accept', 'application/json')
		
		expect(res.headers['content-type']).toMatch(/application\/json/)
		expect(res.body.length).toEqual(9) // 3 * 3 = 9
		expect(res.statusCode).toEqual(httpStatusCodes('OK'))
	})
})
