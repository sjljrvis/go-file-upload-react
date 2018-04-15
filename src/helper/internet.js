import { URL_BASE, URL_BASE_RASA } from './constant';
import axios from 'axios';
import {browserStore} from './collection'
export const makeRequest = (endpoint, method = null, token = null, data = null) => {
	const url = URL_BASE + endpoint;
	const options = getOption(url, method, token, data);
	return new Promise((resolve, reject) => {
		try {
			axios(options)
				.then((res) => {
					resolve({ error: null, res: res });
				})
				.catch((err) => {
					reject({ error: err, res: null });
				});
		}
		catch (e) {
			reject({ error: err, res: null });
		}
	});
};

export const makeRequestToRasa = (endpoint, method = null, token = null, data = null) => {
	const url = URL_BASE_RASA + endpoint;
	const options = getOption(url, method, token, data);
	return new Promise((resolve, reject) => {
		try {
			axios(options)
				.then((res) => {
					resolve({ error: null, res: res });
				})
				.catch((err) => {
					reject({ error: err, res: null });
				});
		}
		catch (e) {
			reject({ error: err, res: null });
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
	options.headers['Authorization'] = browserStore.get("token");
	options.headers['id'] = browserStore.get("id");
	if (data) {
		options['method'] = method || 'POST';
		options['data'] = data;
	}
	return options;
};
