import axios, { AxiosRequestConfig } from 'axios'

const BASE_API_URL = ''


export const api = axios.create({
	baseURL: BASE_API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
})

const requestHandler = (config: AxiosRequestConfig<string | number | boolean>) => {
	return config
}

api.interceptors.request.use((config: AxiosRequestConfig<string | number | boolean>) => requestHandler(config))
