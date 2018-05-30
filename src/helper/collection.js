
export const browserStore = {
	set: (key, value) => {
		localStorage[key] = value;
	},
	get: (key) => {
		return localStorage[key] || "";
	},
	remove: (key) => {
		localStorage.removeItem(key)
	}
}