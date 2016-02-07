const APIURL = 'http://192.168.0.7:8081/api/22d311226b93024c0369305a415f904f';

// stolen from https://github.com/ocombe/node-sickbeard/blob/master/sickbeard.js
const serialize = (obj, prefix) => {
	let str = [];
	for(const p in obj) {
		let k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
		str.push(typeof v == "object" ? serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
	}
	return str.join("&");
}

const sb = (cmd, opts = {}) => {
  return `${APIURL}/?cmd=${cmd}&${serialize(opts)}`;
}

export default sb;
