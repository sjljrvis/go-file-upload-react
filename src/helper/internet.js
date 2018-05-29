import { URL_BASE, URL_BASE_RASA } from './constant';
import axios from 'axios';
import { browserStore } from './collection'
import { SSL_OP_CIPHER_SERVER_PREFERENCE } from 'constants';
export const makeRequest = (endpoint, method = null, token = null, data = null) => {
	const url = URL_BASE + endpoint;
	const options = getOption(url, method, token, data);
	return new Promise((resolve, reject) => {
		try {
			axios(options)
				.then((res) => {
					if (res.data.status) {
						resolve(res)
					}
					else {
					reject(res.data)
					}
				})
				.catch((err) => {
					reject(err);
				});
		}
		catch (e) {
			reject(e);
		}
	});
};

const getOption = (url, method, token, data) => {
	let options = {
		method: method || 'GET',
		url: url,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			"Cache-Control": "no-cache",
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
		}
	};
	options.headers['Authorization'] = `Bearer ${browserStore.get("token")}`;
	if (data) {
		options['method'] = method || 'POST';
		options['data'] = data;
	}
	return options;
};
