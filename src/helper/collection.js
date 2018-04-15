
export const browserStore = {
	set: (key, value) => {
		localStorage[key] = value;
	},
	get: (key) => {
		return localStorage[key] || null;
	},
	remove: (key) => {
		localStorage.removeItem(key)
	}
}