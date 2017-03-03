export default class HFunc {
	constructor() {
	}
	getCleanTime (time) {
		if (!time) {
			var time = new Date();
			return new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), time.getMinutes());
		}
		var time = new Date(time);
		return new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), time.getMinuues());
	}
}
